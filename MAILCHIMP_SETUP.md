# Mailchimp Newsletter Integration Setup

## What You Need from Mailchimp

To integrate the newsletter subscription with Mailchimp, you'll need the following credentials:

### 1. **API Key**
- Go to your Mailchimp account
- Navigate to **Account → Extras → API Keys**
- Create a new API key or copy an existing one
- The API key will look like: `abc123def456-us1`

### 2. **Audience/List ID**
- Go to **Audience → Settings → Audience name and defaults**
- Copy the **Audience ID** (it's a 10-character string like `a1b2c3d4e5`)

### 3. **Server Prefix**
- This is the part after the dash in your API key
- Example: if your API key is `abc123-us1`, then the server prefix is `us1`

## Environment Variables Setup

Create a `.env.local` file in your project root and add:

```env
# Mailchimp Configuration
MAILCHIMP_API_KEY=your_mailchimp_api_key_here
MAILCHIMP_LIST_ID=your_audience_list_id_here
MAILCHIMP_SERVER_PREFIX=us1

# Sanity Configuration (if not already set)
NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_sanity_api_token
```

## Features Included

✅ **Email Validation**: Validates email format before submission  
✅ **Duplicate Handling**: Gracefully handles already subscribed emails  
✅ **Error Handling**: Shows appropriate error messages  
✅ **Loading States**: Visual feedback during subscription  
✅ **Success Messages**: Confirms successful subscription  
✅ **Security**: API keys are kept server-side only  

## How It Works

1. User enters email in the newsletter form
2. Form submits to `/api/subscribe` endpoint
3. API validates email and sends to Mailchimp
4. User gets success/error feedback
5. Email is added to your Mailchimp audience

## Testing

1. Add your Mailchimp credentials to `.env.local`
2. Start your development server
3. Try subscribing with a test email
4. Check your Mailchimp audience to confirm the subscription

## Customization

You can customize the newsletter content through Sanity Studio:
- Title
- Description
- Button text
- Placeholder text

The form will automatically use the content you set in Sanity. 