// Sample data for the dashboard
export interface Lead {
  id: string
  date: string
  source: string
  status: "new" | "contacted" | "qualified" | "unqualified"
  assignedTo: string
}

export interface Offer {
  id: string
  date: string
  leadId: string
  amount: number
  status: "sent" | "accepted" | "rejected" | "countered"
  propertyAddress: string
}

export interface Contract {
  id: string
  date: string
  offerId: string
  amount: number
  status: "signed" | "pending" | "closed" | "cancelled"
  propertyAddress: string
}

export interface Call {
  id: string
  date: string
  callerId: string
  callerName: string
  duration: number // in minutes
  outcome: "no-answer" | "voicemail" | "connected" | "lead-generated"
}

// Generate sample data
const generateSampleData = () => {
  const leads: Lead[] = []
  const offers: Offer[] = []
  const contracts: Contract[] = []
  const calls: Call[] = []

  const callers = [
    { id: "caller1", name: "John Smith" },
    { id: "caller2", name: "Sarah Johnson" },
    { id: "caller3", name: "Mike Davis" },
    { id: "caller4", name: "Lisa Wilson" },
  ]

  const sources = ["Cold Call", "Direct Mail", "Online", "Referral", "Bandit Signs"]
  const addresses = [
    "123 Main St, Dallas TX",
    "456 Oak Ave, Austin TX",
    "789 Pine Rd, Houston TX",
    "321 Elm St, San Antonio TX",
    "654 Maple Dr, Fort Worth TX",
  ]

  // Generate data for the last 12 months
  const startDate = new Date()
  startDate.setMonth(startDate.getMonth() - 12)

  for (let i = 0; i < 365; i++) {
    const currentDate = new Date(startDate)
    currentDate.setDate(startDate.getDate() + i)
    const dateString = currentDate.toISOString().split("T")[0]

    // Generate calls (20-50 per day)
    const dailyCalls = Math.floor(Math.random() * 30) + 20
    for (let j = 0; j < dailyCalls; j++) {
      const caller = callers[Math.floor(Math.random() * callers.length)]
      const outcomes = ["no-answer", "voicemail", "connected", "lead-generated"] as const
      const outcome = outcomes[Math.floor(Math.random() * outcomes.length)]

      calls.push({
        id: `call-${i}-${j}`,
        date: dateString,
        callerId: caller.id,
        callerName: caller.name,
        duration: Math.floor(Math.random() * 15) + 1,
        outcome,
      })

      // Generate leads from successful calls (5-10% conversion)
      if (outcome === "lead-generated" && Math.random() < 0.3) {
        const leadId = `lead-${leads.length + 1}`
        leads.push({
          id: leadId,
          date: dateString,
          source: sources[Math.floor(Math.random() * sources.length)],
          status: Math.random() < 0.7 ? "qualified" : "unqualified",
          assignedTo: caller.name,
        })

        // Generate offers from qualified leads (30-50% conversion)
        if (Math.random() < 0.4) {
          const offerId = `offer-${offers.length + 1}`
          const amount = Math.floor(Math.random() * 200000) + 50000
          offers.push({
            id: offerId,
            date: dateString,
            leadId,
            amount,
            status: Math.random() < 0.3 ? "accepted" : Math.random() < 0.5 ? "rejected" : "sent",
            propertyAddress: addresses[Math.floor(Math.random() * addresses.length)],
          })

          // Generate contracts from accepted offers (80% conversion)
          if (Math.random() < 0.8) {
            contracts.push({
              id: `contract-${contracts.length + 1}`,
              date: dateString,
              offerId,
              amount,
              status: Math.random() < 0.9 ? "signed" : "pending",
              propertyAddress: addresses[Math.floor(Math.random() * addresses.length)],
            })
          }
        }
      }
    }
  }

  return { leads, offers, contracts, calls }
}

export const sampleData = generateSampleData()
