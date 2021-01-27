const config = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-ambiently",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://u2aq6y64hl.execute-api.us-east-1.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_aUjze0q1k",
    APP_CLIENT_ID: "1936hasg38fi8m305dj2l4q6dv",
    IDENTITY_POOL_ID: "us-east-1:e3fbdb08-92bd-4189-9469-e4deb4cd8075",
  },
};

export default config;