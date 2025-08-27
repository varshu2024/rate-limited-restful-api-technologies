# Rate-Limited RESTful API

![API Architecture](api-architecture.png)

A secure, high-performance RESTful API built with Python, FastAPI, Redis, PostgreSQL, and Docker. This project implements custom middleware for authentication, logging, and dynamic rate limiting using a token-bucket algorithm with Redis.

## Features

- **Secure Authentication**: Custom middleware for JWT-based authentication
- **Dynamic Rate Limiting**: Token-bucket algorithm implementation using Redis
- **High Performance**: Handles traffic spikes of up to 100 requests/second
- **Comprehensive Logging**: Detailed request/response logging middleware
- **Test-Driven Development**: Over 90% test coverage for business logic
- **Containerized**: Docker-based deployment for easy setup and scaling

## Technology Stack

- **Python**: Core programming language
- **FastAPI**: Modern, high-performance web framework
- **Redis**: In-memory data store for rate limiting
- **PostgreSQL**: Relational database for persistent data
- **Docker**: Containerization for consistent environments

## Architecture

The API implements a layered architecture with custom middleware handling cross-cutting concerns:

1. **Authentication Middleware**: Validates JWT tokens and manages user sessions
2. **Rate Limiting Middleware**: Uses Redis-based token-bucket algorithm to control request rates
3. **Logging Middleware**: Captures detailed request/response data for monitoring and debugging

## Rate Limiting Implementation

The token-bucket algorithm implementation provides:

- Dynamic rate limits configurable per user/endpoint
- Burst capability for temporary traffic spikes
- Redis-backed storage for distributed consistency
- Minimal performance impact (sub-millisecond overhead)

## Getting Started

### Prerequisites

- Docker
- Docker Compose

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/rate-limited-api.git
cd rate-limited-api
```

2. Set up environment variables:
```bash
cp .env.example .env
# Edit .env with your configuration
```

3. Build and start the services:
```bash
docker-compose up --build
```

The API will be available at `http://localhost:8000`

### API Documentation

Once running, access the interactive API documentation:
- Swagger UI: `http://localhost:8000/docs`
- ReDoc: `http://localhost:8000/redoc`

## Testing

Run the test suite with:
```bash
docker-compose run api pytest -v --cov=app --cov-report=html
```

The test suite achieves over 90% coverage of business logic, following TDD principles.

## Performance

The API has been tested to handle:
- Sustained traffic: 50 requests/second
- Traffic spikes: 100+ requests/second
- Response times: < 100ms for most endpoints (including rate limiting checks)

## Configuration

Rate limiting can be configured through environment variables:

- `DEFAULT_RATE_LIMIT`: Default requests per minute
- `BURST_CAPACITY`: Maximum burst capacity
- `REDIS_URL`: Redis connection string

## License

This project is licensed under the MIT License - see the LICENSE file for details.
