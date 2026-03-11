import { IncomingMessage, ServerResponse } from 'http';

type WecomDmPolicy = "open" | "pairing" | "allowlist" | "disabled";
type WecomGroupPolicy = "open" | "allowlist" | "disabled";
type WecomAccountConfig = {
    name?: string;
    enabled?: boolean;
    webhookPath?: string;
    token?: string;
    encodingAESKey?: string;
    receiveId?: string;
    welcomeText?: string;
    dmPolicy?: WecomDmPolicy;
    allowFrom?: string[];
    groupPolicy?: WecomGroupPolicy;
    groupAllowFrom?: string[];
    requireMention?: boolean;
};
type WecomConfig = WecomAccountConfig & {
    accounts?: Record<string, WecomAccountConfig>;
    defaultAccount?: string;
};
type ResolvedWecomAccount = {
    accountId: string;
    name?: string;
    enabled: boolean;
    configured: boolean;
    token?: string;
    encodingAESKey?: string;
    receiveId: string;
    config: WecomAccountConfig;
};
type WecomInboundBase = {
    msgid?: string;
    aibotid?: string;
    chattype?: "single" | "group";
    chatid?: string;
    response_url?: string;
    from?: {
        userid?: string;
        corpid?: string;
    };
    msgtype?: string;
};
type WecomInboundText = WecomInboundBase & {
    msgtype: "text";
    text?: {
        content?: string;
    };
    quote?: unknown;
};
type WecomInboundVoice = WecomInboundBase & {
    msgtype: "voice";
    voice?: {
        content?: string;
    };
    quote?: unknown;
};
type WecomInboundStreamRefresh = WecomInboundBase & {
    msgtype: "stream";
    stream?: {
        id?: string;
    };
};
type WecomInboundEvent = WecomInboundBase & {
    msgtype: "event";
    create_time?: number;
    event?: {
        eventtype?: string;
        [key: string]: unknown;
    };
};
type WecomInboundMessage = WecomInboundText | WecomInboundVoice | WecomInboundStreamRefresh | WecomInboundEvent | (WecomInboundBase & Record<string, unknown>);

/** 默认账户 ID */
declare const DEFAULT_ACCOUNT_ID = "default";
interface PluginConfig {
    session?: {
        store?: unknown;
    };
    channels?: {
        wecom?: WecomConfig;
    };
}

/**
 * 企业微信 ChannelPlugin 实现
 */

declare const wecomPlugin: {
    id: string;
    meta: {
        id: "wecom";
        label: "WeCom";
        selectionLabel: "WeCom (企业微信)";
        docsPath: "/channels/wecom";
        docsLabel: "wecom";
        blurb: "企业微信智能机器人回调";
        aliases: readonly ["wechatwork", "wework", "qywx", "企微", "企业微信"];
        order: 85;
    };
    capabilities: {
        chatTypes: readonly ["direct", "group"];
        media: boolean;
        reactions: boolean;
        threads: boolean;
        edit: boolean;
        reply: boolean;
        polls: boolean;
    };
    messaging: {
        normalizeTarget: (raw: string) => string | undefined;
        targetResolver: {
            looksLikeId: (raw: string, normalized?: string) => boolean;
            hint: string;
        };
        formatTargetDisplay: (params: {
            target: string;
            display?: string;
        }) => string;
    };
    configSchema: {
        schema: {
            type: string;
            additionalProperties: boolean;
            properties: {
                name: {
                    type: string;
                };
                enabled: {
                    type: string;
                };
                webhookPath: {
                    type: string;
                };
                token: {
                    type: string;
                };
                encodingAESKey: {
                    type: string;
                };
                receiveId: {
                    type: string;
                };
                welcomeText: {
                    type: string;
                };
                dmPolicy: {
                    type: string;
                    enum: string[];
                };
                allowFrom: {
                    type: string;
                    items: {
                        type: string;
                    };
                };
                groupPolicy: {
                    type: string;
                    enum: string[];
                };
                groupAllowFrom: {
                    type: string;
                    items: {
                        type: string;
                    };
                };
                requireMention: {
                    type: string;
                };
                defaultAccount: {
                    type: string;
                };
                accounts: {
                    type: string;
                    additionalProperties: {
                        type: string;
                        additionalProperties: boolean;
                        properties: {
                            name: {
                                type: string;
                            };
                            enabled: {
                                type: string;
                            };
                            webhookPath: {
                                type: string;
                            };
                            token: {
                                type: string;
                            };
                            encodingAESKey: {
                                type: string;
                            };
                            receiveId: {
                                type: string;
                            };
                            welcomeText: {
                                type: string;
                            };
                            dmPolicy: {
                                type: string;
                                enum: string[];
                            };
                            allowFrom: {
                                type: string;
                                items: {
                                    type: string;
                                };
                            };
                            groupPolicy: {
                                type: string;
                                enum: string[];
                            };
                            groupAllowFrom: {
                                type: string;
                                items: {
                                    type: string;
                                };
                            };
                            requireMention: {
                                type: string;
                            };
                        };
                    };
                };
            };
        };
    };
    reload: {
        configPrefixes: string[];
    };
    config: {
        listAccountIds: (cfg: PluginConfig) => string[];
        resolveAccount: (cfg: PluginConfig, accountId?: string) => ResolvedWecomAccount;
        defaultAccountId: (cfg: PluginConfig) => string;
        setAccountEnabled: (params: {
            cfg: PluginConfig;
            accountId?: string;
            enabled: boolean;
        }) => PluginConfig;
        deleteAccount: (params: {
            cfg: PluginConfig;
            accountId?: string;
        }) => PluginConfig;
        isConfigured: (account: ResolvedWecomAccount) => boolean;
        describeAccount: (account: ResolvedWecomAccount) => {
            accountId: string;
            name: string | undefined;
            enabled: boolean;
            configured: boolean;
            webhookPath: string;
        };
        resolveAllowFrom: (params: {
            cfg: PluginConfig;
            accountId?: string;
        }) => string[];
        formatAllowFrom: (params: {
            allowFrom: (string | number)[];
        }) => string[];
    };
    groups: {
        resolveRequireMention: (params: {
            cfg: PluginConfig;
            accountId?: string;
            account?: ResolvedWecomAccount;
        }) => boolean;
    };
    directory: {
        canResolve: (params: {
            target: string;
        }) => boolean;
        resolveTarget: (params: {
            cfg: PluginConfig;
            target: string;
        }) => {
            channel: string;
            accountId?: string;
            to: string;
        } | null;
        resolveTargets: (params: {
            cfg: PluginConfig;
            targets: string[];
        }) => Array<{
            channel: string;
            accountId?: string;
            to: string;
        }>;
        getTargetFormats: () => string[];
    };
    outbound: {
        deliveryMode: string;
        sendText: (params: {
            cfg: PluginConfig;
            accountId?: string;
            to: string;
            text: string;
            sessionKey?: string;
            runId?: string;
        }) => Promise<{
            channel: string;
            ok: boolean;
            messageId: string;
            error?: Error;
        }>;
        sendMedia: (params: {
            cfg: PluginConfig;
            accountId?: string;
            to: string;
            mediaUrl: string;
            text?: string;
            mimeType?: string;
            sessionKey?: string;
            runId?: string;
        }) => Promise<{
            channel: string;
            ok: boolean;
            messageId: string;
            error?: Error;
        }>;
        sendTemplateCard: (params: {
            cfg: PluginConfig;
            accountId?: string;
            to: string;
            templateCard: Record<string, unknown>;
        }) => Promise<{
            channel: string;
            ok: boolean;
            messageId: string;
            error?: Error;
        }>;
    };
    gateway: {
        startAccount: (ctx: {
            cfg: PluginConfig;
            runtime?: unknown;
            abortSignal?: AbortSignal;
            accountId: string;
            setStatus?: (status: Record<string, unknown>) => void;
            log?: {
                info: (msg: string) => void;
                error: (msg: string) => void;
            };
        }) => Promise<void>;
        stopAccount: (ctx: {
            accountId: string;
            setStatus?: (status: Record<string, unknown>) => void;
        }) => Promise<void>;
    };
};

/**
 * 企业微信插件运行时管理
 */
interface PluginRuntime {
    log?: (msg: string) => void;
    error?: (msg: string) => void;
    channel?: {
        routing?: {
            resolveAgentRoute?: (params: {
                cfg: unknown;
                channel: string;
                peer: {
                    kind: string;
                    id: string;
                };
            }) => {
                sessionKey: string;
                accountId: string;
                agentId?: string;
            };
        };
        reply?: {
            dispatchReplyFromConfig?: (params: {
                ctx: unknown;
                cfg: unknown;
                dispatcher?: unknown;
                replyOptions?: unknown;
            }) => Promise<{
                queuedFinal: boolean;
                counts: {
                    final: number;
                };
            }>;
            dispatchReplyWithBufferedBlockDispatcher?: (params: {
                ctx: unknown;
                cfg: unknown;
                dispatcherOptions: {
                    deliver: (payload: {
                        text?: string;
                    }) => Promise<void>;
                    onError?: (err: unknown, info: {
                        kind: string;
                    }) => void;
                };
            }) => Promise<void>;
            finalizeInboundContext?: (ctx: unknown) => unknown;
            createReplyDispatcher?: (params: unknown) => unknown;
            createReplyDispatcherWithTyping?: (params: unknown) => {
                dispatcher: unknown;
                replyOptions?: unknown;
                markDispatchIdle?: () => void;
            };
            resolveHumanDelayConfig?: (cfg: unknown, agentId?: string) => unknown;
            resolveEnvelopeFormatOptions?: (cfg: unknown) => unknown;
            formatAgentEnvelope?: (params: {
                channel: string;
                from: string;
                previousTimestamp?: number;
                envelope?: unknown;
                body: string;
            }) => string;
        };
        session?: {
            resolveStorePath?: (store: unknown, params: {
                agentId?: string;
            }) => string | undefined;
            readSessionUpdatedAt?: (params: {
                storePath?: string;
                sessionKey: string;
            }) => number | null;
            recordInboundSession?: (params: {
                storePath: string;
                sessionKey: string;
                ctx: unknown;
                onRecordError?: (err: unknown) => void;
            }) => Promise<void>;
        };
        text?: {
            resolveMarkdownTableMode?: (params: {
                cfg: unknown;
                channel: string;
                accountId?: string;
            }) => unknown;
            convertMarkdownTables?: (text: string, mode: unknown) => string;
        };
    };
    system?: {
        enqueueSystemEvent?: (message: string, options?: unknown) => void;
    };
    [key: string]: unknown;
}
declare function setWecomRuntime(next: PluginRuntime): void;
declare function getWecomRuntime(): PluginRuntime;

/**
 * @openclaw-china/wecom
 * 企业微信渠道插件入口
 *
 * 导出:
 * - wecomPlugin: ChannelPlugin 实现
 * - DEFAULT_ACCOUNT_ID: 默认账户 ID
 * - setWecomRuntime: 设置 Moltbot 运行时
 */

/**
 * Moltbot 插件 API 接口
 */
type HttpRouteMatch = "exact" | "prefix";
type HttpRouteAuth = "gateway" | "plugin";
type HttpRouteParams = {
    path: string;
    auth: HttpRouteAuth;
    match?: HttpRouteMatch;
    handler: (req: IncomingMessage, res: ServerResponse) => Promise<boolean> | boolean;
};
type WecomRouteConfig = {
    webhookPath?: string;
    accounts?: Record<string, {
        webhookPath?: string;
    }>;
};
interface MoltbotPluginApi {
    registerChannel: (opts: {
        plugin: unknown;
    }) => void;
    registerHttpHandler?: (handler: (req: IncomingMessage, res: ServerResponse) => Promise<boolean> | boolean) => void;
    registerHttpRoute?: (params: HttpRouteParams) => void;
    config?: {
        channels?: {
            wecom?: WecomRouteConfig;
        };
    };
    runtime?: unknown;
    [key: string]: unknown;
}

declare const plugin: {
    id: string;
    name: string;
    description: string;
    configSchema: {
        type: string;
        additionalProperties: boolean;
        properties: {};
    };
    register(api: MoltbotPluginApi): void;
};

export { DEFAULT_ACCOUNT_ID, type MoltbotPluginApi, type ResolvedWecomAccount, type WecomConfig, type WecomInboundMessage, plugin as default, getWecomRuntime, setWecomRuntime, wecomPlugin };
