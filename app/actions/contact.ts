"use server"

const HUBSPOT_ACCESS_TOKEN = process.env.HUBSPOT_ACCESS_TOKEN
const HUBSPOT_PORTAL_ID = process.env.HUBSPOT_PORTAL_ID

export async function submitContactForm(formData: FormData) {
  const firstName = formData.get("firstName") as string
  const lastName = formData.get("lastName") as string
  const phone = formData.get("phone") as string
  const email = formData.get("email") as string
  const propertyAddress = formData.get("propertyAddress") as string
  const situation = formData.get("situation") as string

  // Validate required fields
  if (!firstName || !lastName || !phone || !email || !propertyAddress) {
    return {
      success: false,
      message: "Please fill in all required fields.",
    }
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return {
      success: false,
      message: "Please enter a valid email address.",
    }
  }

  // Phone validation (basic)
  const phoneRegex = /^[\d\s\-()$$$$+.]{10,}$/
  if (!phoneRegex.test(phone.replace(/\s/g, ""))) {
    return {
      success: false,
      message: "Please enter a valid phone number.",
    }
  }

  try {
    // Create contact in HubSpot
    const hubspotResponse = await fetch(
      "https://api.hubapi.com/crm/v3/objects/contacts",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${HUBSPOT_ACCESS_TOKEN}`,
        },
        body: JSON.stringify({
          properties: {
            firstname: firstName,
            lastname: lastName,
            email: email,
            phone: phone,
            address: propertyAddress,
            message: situation || "",
            hs_lead_status: "NEW",
            lifecyclestage: "lead",
          },
        }),
      }
    )

    // Handle duplicate contact (already exists in HubSpot)
    if (hubspotResponse.status === 409) {
      // Contact exists, try to update instead
      const existingContactResponse = await fetch(
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
              message: situation || "",
            },
          }),
        }
      )

      if (!existingContactResponse.ok) {
        console.error("HubSpot update error:", await existingContactResponse.text())
      }
    } else if (!hubspotResponse.ok) {
      const errorData = await hubspotResponse.text()
      console.error("HubSpot API error:", errorData)
      throw new Error(`HubSpot API error: ${hubspotResponse.status}`)
    }

    return {
      success: true,
      message: "Thank you! We've received your information and will contact you within 24 hours with a cash offer.",
    }
  } catch (error) {
    console.error("Error submitting form:", error)
    return {
      success: false,
      message:
        "Sorry, there was an error submitting your request. Please try again or call us directly at (786) 741-7160.",
    }
  }
}
