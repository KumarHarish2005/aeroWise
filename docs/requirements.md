# AeroWise – Project Requirements

## 1. Project Overview

**Project Name:** AeroWise

**Tagline:** Smarter Flights. Better Journeys.

**Project Type:** AI-powered Airline Booking and Flight Recommendation Platform.

**Objective:**

AeroWise aims to provide an intelligent flight booking platform that helps travellers find the most suitable flight itineraries according to their preferences, budget, travel duration, stopovers and airline quality.

Unlike traditional flight booking platforms that primarily rely on filters and sorting, AeroWise will use recommendation algorithms, optimization techniques and machine learning to provide personalized flight suggestions.

## 2. Problem Statement

Finding the best flight is not always about finding the cheapest ticket.

Travellers often need to consider multiple factors:

- Ticket price
- Total journey duration
- Number of stopovers
- Layover duration
- Airline quality
- Departure and arrival times
- Flight delays and cancellation risks

Comparing all these factors manually can be difficult and time-consuming.

AeroWise aims to simplify this process through intelligent flight search, itinerary optimization and personalized recommendations.

## 3. Project Goals

1. Provide a convenient flight search experience.
2. Allow users to compare multiple airlines and itineraries.
3. Generate connecting flight combinations.
4. Recommend suitable flights based on individual preferences.
5. Predict possible changes in flight prices.
6. Provide insights into flight delays and travel risks.
7. Provide a secure flight booking experience.
8. Develop an AI-powered travel assistant.

## 4. Target Users

- Budget-conscious travellers
- Students
- Business travellers
- Frequent flyers
- International travellers
- Users looking for connecting flights

## 5. Functional Requirements

### 5.1 User Authentication

- User registration.
- User login and logout.
- Secure password hashing.
- JWT-based authentication.
- Protected routes.
- User profile management.
- Password reset functionality.

### 5.2 Flight Search

Users should be able to search flights using:

- Source airport.
- Destination airport.
- Departure date.
- Return date (optional).
- Number of passengers.
- Cabin class.
- Trip type (one-way or round-trip).

The platform should retrieve flight information from integrated flight data providers.

### 5.3 Flight Filtering and Comparison

Users should be able to filter flights based on:

- Minimum and maximum price.
- Airlines.
- Number of stopovers.
- Total travel duration.
- Departure time.
- Arrival time.
- Layover duration.
- Cabin class.

Users should be able to compare multiple itineraries.

### 5.4 Connecting Flight Optimization

The system should:

- Identify possible connecting flights.
- Generate valid multi-leg itineraries.
- Check connection airports.
- Validate minimum connection times.
- Calculate total journey duration.
- Calculate total itinerary cost.
- Consider baggage and ticketing conditions where available.
- Exclude invalid or infeasible connections.

### 5.5 AI-Based Flight Recommendations

The system should recommend flights based on:

- User budget.
- Preferred airlines.
- Maximum journey duration.
- Preferred number of stopovers.
- Layover preferences.
- Airline quality.
- Historical user preferences.

Recommendation categories:

1. Cheapest Flight
2. Fastest Flight
3. Best Overall Flight
4. Best Budget-Friendly Flight
5. Most Convenient Flight

The system should explain why an itinerary was recommended.

### 5.6 Flight Price Prediction

The platform should eventually:

- Analyze historical flight prices.
- Predict possible price trends.
- Estimate whether prices may increase or decrease.
- Suggest alternative travel dates.
- Provide price tracking and alerts.

Predictions must include uncertainty and should not be presented as guaranteed future prices.

### 5.7 Flight Delay Prediction

The system may estimate flight delay probabilities using:

- Historical flight delays.
- Airline information.
- Airport information.
- Departure time.
- Weather information, if available.
- Other relevant historical features.

### 5.8 Booking Management

- Passenger information collection.
- Itinerary selection.
- Fare and availability revalidation.
- Booking initiation.
- Payment processing.
- Booking confirmation.
- Booking history.
- Booking cancellation where supported.
- Booking status tracking.

AeroWise must use an authorized booking provider or airline integration for actual ticket issuance.

### 5.9 AI Travel Assistant

Users should eventually be able to enter natural-language requests such as:

"Find me the cheapest flight from Delhi to London with one stopover and a maximum journey duration of 18 hours."

The assistant should convert these requests into structured flight-search preferences.

It should also explain recommendations and suggest alternatives.

## 6. Non-Functional Requirements

### Performance
- Fast API responses.
- Efficient flight search.
- Pagination for large search results.
- Caching where appropriate.
- Efficient database queries.

### Security
- Password hashing.
- Secure authentication cookies.
- Input validation.
- API rate limiting.
- Authorization checks.
- Secure payment handling.
- Protection of sensitive passenger information.

### Scalability
- Modular backend architecture.
- Separate AI service.
- Reusable API services.
- Support for additional flight providers.

### Reliability
- Proper error handling.
- Payment verification.
- Booking status consistency.
- External API failure handling.
- Logging and monitoring.

### Maintainability
- Modular folder structure.
- Consistent naming conventions.
- API documentation.
- Environment-based configuration.
- Automated testing.

## 7. Technology Stack

| Component | Technology |
|---|---|
| Frontend | React.js |
| Styling | Tailwind CSS |
| State Management | Redux Toolkit |
| Routing | React Router |
| Backend | Node.js |
| Backend Framework | Express.js |
| Database | MongoDB |
| ODM | Mongoose |
| Authentication | JWT |
| AI Service | Python + FastAPI |
| Data Processing | Pandas, NumPy |
| Machine Learning | Scikit-learn, XGBoost |
| Route Optimization | NetworkX, OR-Tools |
| Payments | Payment gateway |
| Version Control | Git + GitHub |

## 8. Development Phases

### Phase 1 – Project Foundation
- GitHub repository setup.
- Project documentation.
- Frontend initialization.
- Backend initialization.
- MongoDB connection.
- Environment configuration.

### Phase 2 – Authentication
- Registration.
- Login and logout.
- Protected routes.
- User profile.

### Phase 3 – Flight Search
- Flight provider integration.
- Airport search.
- Flight search form.
- Flight result display.
- Filtering and sorting.

### Phase 4 – Itinerary Optimization
- Connecting flight combinations.
- Connection validation.
- Stopover calculations.
- Multi-criteria ranking.

### Phase 5 – AI Recommendations
- User preference modelling.
- Recommendation engine.
- Flight ranking.
- Recommendation explanations.

### Phase 6 – Booking System
- Passenger details.
- Fare revalidation.
- Payment integration.
- Booking confirmation.
- Booking management.

### Phase 7 – Predictive AI
- Historical price analysis.
- Price prediction.
- Delay prediction.
- Price alerts.

### Phase 8 – AI Travel Assistant
- Natural-language search.
- Personalized suggestions.
- Conversational recommendations.

### Phase 9 – Testing and Deployment
- Frontend testing.
- Backend testing.
- AI model testing.
- Integration testing.
- Deployment.
- Monitoring.

## 9. Project Success Criteria

A successful initial release should allow users to:

1. Register and log in.
2. Search flights between airports.
3. View available flight results.
4. Compare different itineraries.
5. Filter flights using their preferences.
6. Receive ranked recommendations.
7. View detailed itinerary information.

Actual booking and ticket issuance will depend on the capabilities and commercial access of the selected flight provider.

## 10. Future Enhancements

- Multi-city travel planning.
- Alternative airport recommendations.
- Hotel recommendations.
- Travel expense estimation.
- Loyalty program integration.
- Advanced AI travel assistant.
- Personalized travel history analysis.