// Decoupled client for standalone Vercel deployment
import { Vehicle, Inquiry, User } from './entities';

export const base44 = {
  entities: {
    Vehicle,
    Inquiry
  },
  auth: User,
  functions: {
    importJsonFeed: async () => ({ success: true, count: 0 }),
    cronFeedImport: async () => ({ success: true })
  },
  integrations: {
    Core: {
      InvokeLLM: async () => ({ response: "" }),
      SendEmail: async () => ({ success: true }),
      UploadFile: async (file) => ({ url: URL.createObjectURL(file) }),
      GenerateImage: async () => ({ url: "" }),
      ExtractDataFromUploadedFile: async () => ({ data: {} }),
      CreateFileSignedUrl: async () => ({ url: "" }),
      UploadPrivateFile: async () => ({ url: "" })
    }
  }
};
