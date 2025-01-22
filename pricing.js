"use strict"

class DynamicPricing {
    constructor(basePrice) {
        this.basePrice = basePrice; // Base price of the product/service
    }

    /**
     * Generic Supply & Demand Pricing Formula (Default)
     */
    generalPricing(demand, supply, maxSupply, sensitivity = 0.5) {
        return this.basePrice * (1 + ((demand - supply) / maxSupply) * sensitivity);
    }

    /**
     * Retail & E-commerce Pricing
     */
    retailPricing(demand, supply, maxSupply, competitorPrice, sensitivity = 0.5) {
        const competitiveFactor = competitorPrice / this.basePrice;
        return this.basePrice * (1 + ((demand - supply) / maxSupply) * sensitivity) * competitiveFactor;
    }

    /**
     * Subscription Services (SaaS, Streaming)
     */
    saasPricing(newUsers, lostUsers, totalUsers, lifetimeValue, acquisitionCost, sensitivity = 0.5) {
        const growthFactor = (newUsers - lostUsers) / totalUsers;
        const LTVFactor = lifetimeValue / acquisitionCost;
        return this.basePrice * (1 + growthFactor * sensitivity) * LTVFactor;
    }

    /**
     * Airlines & Travel Pricing
     */
    airlinePricing(seatsSold, seatsAvailable, totalSeats, timeLeft, maxTime, sensitivity = 0.5) {
        const timeUrgency = (maxTime - timeLeft) / maxTime;
        return this.basePrice * (1 + ((seatsSold - seatsAvailable) / totalSeats) * sensitivity) * (1 + timeUrgency);
    }

    /**
     * Gig Economy (Freelance, Rideshare)
     */
    gigPricing(activeRequests, availableWorkers, maxWorkers, urgencyFactor = 1.2, sensitivity = 0.5) {
        return this.basePrice * (1 + ((activeRequests - availableWorkers) / maxWorkers) * sensitivity) * urgencyFactor;
    }

    /**
     * Energy & Utilities Pricing
     */
    energyPricing(demand, supply, maxSupply, environmentalFactor = 1.1, sensitivity = 0.5) {
        return this.basePrice * (1 + ((demand - supply) / maxSupply) * sensitivity) * environmentalFactor;
    }

    /**
     * Main function to calculate price based on industry type
     */
    calculatePrice(industry, params) {
        switch (industry) {
            case 'retail':
                return this.retailPricing(params.demand, params.supply, params.maxSupply, params.competitorPrice, params.sensitivity);
            case 'saas':
                return this.saasPricing(params.newUsers, params.lostUsers, params.totalUsers, params.lifetimeValue, params.acquisitionCost, params.sensitivity);
            case 'airline':
                return this.airlinePricing(params.seatsSold, params.seatsAvailable, params.totalSeats, params.timeLeft, params.maxTime, params.sensitivity);
            case 'gig':
                return this.gigPricing(params.activeRequests, params.availableWorkers, params.maxWorkers, params.urgencyFactor, params.sensitivity);
            case 'energy':
                return this.energyPricing(params.demand, params.supply, params.maxSupply, params.environmentalFactor, params.sensitivity);
            default:
                return this.generalPricing(params.demand, params.supply, params.maxSupply, params.sensitivity);
        }
    }
}

module.exports = DynamicPricing;
