"use server"

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
  const phoneRegex = /^[\d\s\-$$$$+.]{10,}$/
  if (!phoneRegex.test(phone.replace(/\s/g, ""))) {
    return {
      success: false,
      message: "Please enter a valid phone number.",
    }
  }

  try {
    // In a real implementation, you would use a service like:
    // - Resend (resend.com)
    // - SendGrid
    // - Nodemailer with SMTP
    // - AWS SES

    // For now, we'll simulate the email sending
    console.log("New lead submission:", {
      firstName,
      lastName,
      phone,
      email,
      propertyAddress,
      situation,
      submittedAt: new Date().toISOString(),
    })

    // Simulate email sending delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // In production, you would send an actual email here:
    /*
    await sendEmail({
      to: 'omar@missionvalleyhomebuyers.com',
      subject: `New Cash Offer Request from ${firstName} ${lastName}`,
      html: `
        <h2>New Cash Offer Request</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Property Address:</strong> ${propertyAddress}</p>
        <p><strong>Situation:</strong> ${situation || 'Not provided'}</p>
        <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
      `
    })
    */

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
