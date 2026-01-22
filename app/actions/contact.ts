"use server"

const HUBSPOT_ACCESS_TOKEN = process.env.HUBSPOT_ACCESS_TOKEN

export async function submitContactForm(formData: FormData) {
  const firstName = formData.get("firstName") as string
  const lastName = formData.get("lastName") as string
  const phone = formData.get("phone") as string
  const email = formData.get("email") as string
  const propertyAddress = formData.get("propertyAddress") as string
  const situation = formData.get("situation") as string

  if (!firstName || !lastName || !phone || !email || !propertyAddress) {
    return {
      success: false,
      message: "Please fill in all required fields.",
    }
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return {
      success: false,
      message: "Please enter a valid email address.",
    }
  }

  const phoneRegex = /^[\d\s\-()+.]{10,}$/
  if (!phoneRegex.test(phone.replace(/\s/g, ""))) {
    return {
      success: false,
      message: "Please enter a valid phone number.",
    }
  }

  if (!HUBSPOT_ACCESS_TOKEN) {
    console.error("HUBSPOT_ACCESS_TOKEN is not configured")
    return {
      success: false,
      message: "Sorry, there was a configuration error. Please call us directly at (786) 741-7160.",
    }
  }

  try {
    const contactProperties: Record<string, string> = {
      firstname: firstName,
      lastname: lastName,
      email: email,
      phone: phone,
      address: propertyAddress,
      hs_lead_status: "NEW",
      lifecyclestage: "lead",
    }

    if (situation) {
      contactProperties.notes = `Property: ${propertyAddress}\n\nSituation: ${situation}`
    }

    const hubspotResponse = await fetch(
      "https://api.hubapi.com/crm/v3/objects/contacts",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${HUBSPOT_ACCESS_TOKEN}`,
        },
        body: JSON.stringify({
          properties: contactProperties,
        }),
      }
    )

    const responseData = await hubspotResponse.json()

    if (hubspotResponse.status === 409) {
      await fetch(
        `https://api.hubapi.com/crm/v3/objects/contacts/${encodeURIComponent(email)}?idProperty=email`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${HUBSPOT_ACCESS_TOKEN}`,
          },
          body: JSON.stringify({
            properties: {
              firstname: firstName,
              lastname: lastName,
              phone: phone,
              address: propertyAddress,
            },
          }),
        }
      )
      
      return {
        success: true,
        message: "Thank you! We've received your information and will contact you within 24 hours with a cash offer.",
      }
    } 
    
    if (!hubspotResponse.ok) {
      console.error("HubSpot API error:", JSON.stringify(responseData))
      return {
        success: false,
        message: "Sorry, there was an error submitting your request. Please try again or call us directly at (786) 741-7160.",
      }
    }

    return {
      success: true,
      message: "Thank you! We've received your information and will contact you within 24 hours with a cash offer.",
    }
  } catch (error) {
    console.error("Error submitting form:", error)
    return {
      success: false,
      message: "Sorry, there was an error submitting your request. Please try again or call us directly at (786) 741-7160.",
    }
  }
}
