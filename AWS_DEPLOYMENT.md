# AWS deployment

The AWS version lives in `aws-site/`. It preserves the current design while avoiding the Cloudflare Worker runtime used by the OpenAI Sites deployment.

## 1. Verify an Amazon SES sender

In the AWS region you will deploy to, open Amazon SES and verify a sender email address or domain. If the SES account is still in the sandbox, also verify `bromleyinstitute@gmail.com`; production SES accounts can send to it without recipient verification.

## 2. Deploy the contact API

Install the AWS CLI and AWS SAM CLI, authenticate to the intended AWS account, and run from the repository root:

```sh
sam deploy --template-file aws-infrastructure/template.yaml --guided
```

Use `bromleyinstitute@gmail.com` for `RecipientEmail` and your SES-verified address for `SenderEmail`. Save the displayed `ContactApiUrl` output.

## 3. Connect AWS Amplify to GitHub

Create an Amplify Hosting app from `alcjns/TBI-BENEFIT-ADVISORS`, select the `main` branch, and let Amplify use the committed `amplify.yml` file.

Before deploying, add an Amplify environment variable:

- Name: `CONTACT_API_URL`
- Value: the `ContactApiUrl` output from the SAM deployment

Amplify will publish `aws-dist/` and rebuild after each push to `main`.

## 4. Connect the domain

In Amplify, open **Hosting → Custom domains → Add domain**. Add the root domain and `www` mapping and choose the Amplify-managed certificate. Route 53 domains are configured automatically; for another registrar, add the verification and routing records shown by Amplify to that provider's DNS dashboard.

## Security and operations

- The form rejects oversized or incomplete requests and includes a honeypot field for basic bot filtering.
- Do not request or transmit medical information through this form.
- Monitor Lambda, API Gateway, and SES usage. For a public launch, add AWS WAF/rate limiting if spam becomes an issue.
