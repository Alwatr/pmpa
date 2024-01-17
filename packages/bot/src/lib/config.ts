import {definePackage} from '@alwatr/logger';
import {Region, StoreFileExtension, StoreFileType} from '@alwatr/store-engine';

import type {} from '@alwatr/nano-build'
import type {UserFromGetMe} from 'grammy/types';

export const logger = definePackage('@moqis/dcd-bot', __package_version__);

if (process.env.botToken == null) {
  throw new Error('`botToken` is required');
}
if (process.env.botAdminChatId == null) {
  throw new Error('`botAdminChatId` is required');
}

export const config = {
  storeEngine: {
    rootPath: './data',
    defaultChangeDebounce: 50,
  },

  bot: {
    token: process.env.botToken as string,
    adminChatId: process.env.botAdminChatId as string,

    info: {
      username: process.env.botUsername,
      can_join_groups: true,
      can_read_all_group_messages: false,
      first_name: process.env.BOT_FIRST_NAME,
      is_bot: true,
      supports_inline_queries: false,
      language_code: 'fa',
    } as UserFromGetMe,
  },

  storeStat: {
    users: {
      extension: StoreFileExtension.Json,
      name: 'users',
      region: Region.SuperAdmin,
      type: StoreFileType.Collection,
    },
    content: {
      extension: StoreFileExtension.Json,
      name: 'content',
      region: Region.SuperAdmin,
      type: StoreFileType.Collection,
    },
  },
} as const;

logger.logProperty?.('config', config);
