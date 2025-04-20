# Blue Dart Push API Integration

NestJS middleware service for integrating with Blue Dart's Push API, handling shipment status updates and delivery notifications.

## Prerequisites

- Node.js 18 or higher
- Docker and Docker Compose (for containerized deployment)
- Git

## Local Development Setup

1. Clone the repository and install dependencies:
```bash
npm install
```

2. Create environment file:
```bash
cp .env.example .env
```

Configure the following variables in `.env`:
```
UAT_AUTH_USERNAME=bluedart_uat
UAT_AUTH_PASSWORD=uat_password
PROD_AUTH_USERNAME=bluedart_prod
PROD_AUTH_PASSWORD=prod_password
API_KEY=your_api_key
ENVIRONMENT=uat
```

3. Start development server:
```bash
npm run start:dev
```

The API will be available at `http://localhost:3000`

## API Documentation

Swagger documentation is available at `/api` endpoint when the server is running.

### Available Endpoints

- `POST /api/bluedart/status-tracking`: Handle shipment status updates
  - Requires Basic Authentication
  - Accepts JSON payload with shipment tracking details

## Testing

Run the test suite:
```bash
npm test
```

Watch mode for development:
```bash
npm run test:watch
```

## Docker Deployment

1. Build and run using Docker Compose:
```bash
docker-compose up --build
```

2. Or build and run manually:
```bash
npm run docker:build
npm run docker:run
```

## Cloud Deployment

### Prerequisites
- Docker registry access
- Cloud platform CLI tools configured

### Deployment Steps

1. Build and tag the Docker image:
```bash
docker build -t your-registry/bluedart-middleware:latest .
```

2. Push to container registry:
```bash
docker push your-registry/bluedart-middleware:latest
```

### AWS Elastic Beanstalk Deployment

1. Initialize Elastic Beanstalk application:
```bash
eb init bluedart-middleware --platform docker
```

2. Create environment and deploy:
```bash
eb create production
```

### Google Cloud Run Deployment

1. Build and push to Google Container Registry:
```bash
gcloud builds submit --tag gcr.io/your-project/bluedart-middleware
```

2. Deploy to Cloud Run:
```bash
gcloud run deploy bluedart-middleware \
  --image gcr.io/your-project/bluedart-middleware \
  --platform managed
```

### Azure Container Apps Deployment

1. Create Azure Container Registry:
```bash
az acr create --name bluedartmiddleware --resource-group mygroup --sku Basic
```

2. Build and push:
```bash
az acr build --registry bluedartmiddleware --image bluedart-middleware:latest .
```

3. Deploy to Container Apps:
```bash
az containerapp create \
  --name bluedart-middleware \
  --resource-group mygroup \
  --image bluedartmiddleware.azurecr.io/bluedart-middleware:latest
```

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| UAT_AUTH_USERNAME | Username for UAT environment | Yes |
| UAT_AUTH_PASSWORD | Password for UAT environment | Yes |
| PROD_AUTH_USERNAME | Username for production environment | Yes |
| PROD_AUTH_PASSWORD | Password for production environment | Yes |
| API_KEY | API key for external services | Yes |
| ENVIRONMENT | Current environment (uat/prod) | Yes |

## Security Considerations

- Always use HTTPS in production
- Rotate credentials regularly
- Monitor API access logs
- Set up rate limiting in production
- Configure proper CORS settings

## Testing with Curl

```
curl -X POST http://localhost:3000/api/bluedart/status-tracking \
  -H "Authorization: Basic $(echo -n 'bluedart_uat:uat_password' | base64)" \
  -H "Content-Type: application/json" \
  -d '{
    "statustracking": [
      {
        "Shipment": {
          "WaybillNo": "69679343790",
          "Origin": "NEW DELHI",
          "Destination": "MUMBAI",
          "Scans": {
            "ScanDetail": [
              {
                "Scan": "SHIPMENT DELIVERED",
                "ScanCode": "000",
                "ScanDate": "28-05-2019",
                "ScanTime": "1425",
                "ScannedLocation": "GOREGAON",
                "ScanType": "DL"
              }
            ]
          }
        }
      }
    ]
  }'
```

The above curl command sends a minimal payload to test the status tracking endpoint. For full payload examples, refer to the Blue Dart API documentation.
