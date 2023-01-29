
const discordUsers = {
    THAT_I_AM: '372994941909073931',
    uwu_WAIFU: '1068697069801447516',
}

const discordChannels = {
    J3NKii_WELCOME: '1068624906314592356',
    J3NKii_ANNOUNCEMENTS: '1068670017920577668',
    J3NKii_GENERAL: '1068722470258999336',
    THULU_CREW: '674508295075266563',
}

const sandwiches = [
    'https://assets.bonappetit.com/photos/62b1f659a38f8b1339b88af8/3:2/w_2931,h_1954,c_limit/20220615-0622-sandwiches-1746-final%20(1).jpg',
    'https://thekitchencommunity.org/wp-content/uploads/2021/09/sandwiches-shutterstock_1638795847.jpg',
    'https://media-cdn.greatbritishchefs.com/media/ht0j5zyv/img60136.jpg',
    'https://www.seriouseats.com/thmb/H4EToSvkPiMjXilHVBHmpTehM3s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20220919-Reuben-Amanda-Suarez-25-Hero-a2d20d81e56641a098e6db49b6e30b41.jpg',
    'https://www.spoonforkbacon.com/wp-content/uploads/2021/10/philly_cheesesteak_recipe-card.jpg',
    'https://www.thespruceeats.com/thmb/zBVaQHpbcBiz2ohBMpRJENoJ6pU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/spicy-fried-chicken-sandwich-5220981-hero-01-f742363e943f4fc1aff902da3342765a.jpg',
    'https://www.halfbakedharvest.com/wp-content/uploads/2022/05/Honey-Mustard-Chicken-Avocado-Sandwich-with-Tahini-Ranch.-1.jpg',
    'https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_auto,w_1500,ar_3:2/k%2FPhoto%2FRecipes%2F2020-08-most-wanted-california-sandwich%2FKitchn_Cali_Sandwich-horizontal',
    'https://images.immediate.co.uk/production/volatile/sites/30/2013/05/herby-chicken-gyros-8233167.jpg',
    'https://www.cooking-therapy.com/wp-content/uploads/2020/08/Lemongrass-Pork-Banh-Mi-6.jpg'
];

const spreadsheets = {
    RSVP: '1QF1RC0b6VWtXFdkOwg-6oBnoliPpuyijD8R4L_GcRMA',
}


const diEvents = {
    ApplicationCommandPermissionsUpdate: 'applicationCommandPermissionsUpdate',
    AutoModerationActionExecution: 'autoModerationActionExecution',
    AutoModerationRuleCreate: 'autoModerationRuleCreate',
    AutoModerationRuleDelete: 'autoModerationRuleDelete',
    AutoModerationRuleUpdate: 'autoModerationRuleUpdate',
    CacheSweep: 'cacheSweep',
    ChannelCreate: 'channelCreate',
    ChannelDelete: 'channelDelete',
    ChannelPinsUpdate: 'channelPinsUpdate',
    ChannelUpdate: 'channelUpdate',
    ClientReady: 'ready',
    Debug: 'debug',
    Error: 'error',
    GuildBanAdd: 'guildBanAdd',
    GuildBanRemove: 'guildBanRemove',
    GuildCreate: 'guildCreate',
    GuildDelete: 'guildDelete',
    GuildEmojiCreate: 'emojiCreate',
    GuildEmojiDelete: 'emojiDelete',
    GuildEmojiUpdate: 'emojiUpdate',
    GuildIntegrationsUpdate: 'guildIntegrationsUpdate',
    GuildMemberAdd: 'guildMemberAdd',
    GuildMemberAvailable: 'guildMemberAvailable',
    GuildMemberRemove: 'guildMemberRemove',
    GuildMembersChunk: 'guildMembersChunk',
    GuildMemberUpdate: 'guildMemberUpdate',
    GuildRoleCreate: 'roleCreate',
    GuildRoleDelete: 'roleDelete',
    GuildRoleUpdate: 'roleUpdate',
    GuildScheduledEventCreate: 'guildScheduledEventCreate',
    GuildScheduledEventDelete: 'guildScheduledEventDelete',
    GuildScheduledEventUpdate: 'guildScheduledEventUpdate',
    GuildScheduledEventUserAdd: 'guildScheduledEventUserAdd',
    GuildScheduledEventUserRemove: 'guildScheduledEventUserRemove',
    GuildStickerCreate: 'stickerCreate',
    GuildStickerDelete: 'stickerDelete',
    GuildStickerUpdate: 'stickerUpdate',
    GuildUnavailable: 'guildUnavailable',
    GuildUpdate: 'guildUpdate',
    InteractionCreate: 'interactionCreate',
    Invalidated: 'invalidated',
    InviteCreate: 'inviteCreate',
    InviteDelete: 'inviteDelete',
    MessageBulkDelete: 'messageDeleteBulk',
    MessageCreate: 'messageCreate',
    MessageDelete: 'messageDelete',
    MessageReactionAdd: 'messageReactionAdd',
    MessageReactionRemove: 'messageReactionRemove',
    MessageReactionRemoveAll: 'messageReactionRemoveAll',
    MessageReactionRemoveEmoji: 'messageReactionRemoveEmoji',
    MessageUpdate: 'messageUpdate',
    PresenceUpdate: 'presenceUpdate',
    Raw: 'raw',
    ShardDisconnect: 'shardDisconnect',
    ShardError: 'shardError',
    ShardReady: 'shardReady',
    ShardReconnecting: 'shardReconnecting',
    ShardResume: 'shardResume',
    StageInstanceCreate: 'stageInstanceCreate',
    StageInstanceDelete: 'stageInstanceDelete',
    StageInstanceUpdate: 'stageInstanceUpdate',
    ThreadCreate: 'threadCreate',
    ThreadDelete: 'threadDelete',
    ThreadListSync: 'threadListSync',
    ThreadMembersUpdate: 'threadMembersUpdate',
    ThreadMemberUpdate: 'threadMemberUpdate',
    ThreadUpdate: 'threadUpdate',
    TypingStart: 'typingStart',
    UserUpdate: 'userUpdate',
    VoiceServerUpdate: 'voiceServerUpdate',
    VoiceStateUpdate: 'voiceStateUpdate',
    Warn: 'warn',
    WebhooksUpdate: 'webhookUpdate'
}

const eventIntents ={
    Guilds: 1,
    GuildMembers: 2,
    GuildModeration: 4,
    GuildBans: 4,
    GuildEmojisAndStickers: 8,
    GuildIntegrations: 16,
    GuildWebhooks: 32,
    GuildInvites: 64,
    GuildVoiceStates: 128,
    GuildPresences: 256,
    GuildMessages: 512,
    GuildMessageReactions: 1024,
    GuildMessageTyping: 2048,
    DirectMessages: 4096,
    DirectMessageReactions: 8192,
    DirectMessageTyping: 16384,
    MessageContent: 32768,
    GuildScheduledEvents: 65536,
    AutoModerationConfiguration: 1048576,
    AutoModerationExecution: 2097152
}
module.exports = {
    discordChannels,
    discordUsers,
    sandwiches,
    spreadsheets
}