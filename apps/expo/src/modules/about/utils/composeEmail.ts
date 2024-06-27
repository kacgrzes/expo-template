import * as MailComposer from "expo-mail-composer";
import packageJson from "packageJson";

export const composeEmail = async () => {
  const isAvailable = await MailComposer.isAvailableAsync();

  if (isAvailable) {
    return await MailComposer.composeAsync({
      subject: "Hello from Expo",
      body: "Hello! This is a test email from Expo!",
      recipients: [packageJson.author.email],
    });
  }
};
