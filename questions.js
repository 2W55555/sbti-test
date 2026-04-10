/**
 * SBTI 人格测试题目数据
 * 包含31道趣味测试题
 * 风格：荒诞、自嘲、符合年轻人网络亚文化
 * 原作者：B站UP主"蛆肉儿串儿"(UID: 417038183)
 */

// 十五维度定义 (基于原版SBTI)
const DIMENSIONS = {
    S1: { name: '自尊自信', emoji: '💪' },
    S2: { name: '自我清晰度', emoji: '🔍' },
    S3: { name: '核心价值', emoji: '💎' },
    E1: { name: '依恋安全感', emoji: '🔐' },
    E2: { name: '情感投入度', emoji: '❤️' },
    E3: { name: '边界与依赖', emoji: '🚧' },
    A1: { name: '世界观倾向', emoji: '🌍' },
    A2: { name: '规则与灵活度', emoji: '📏' },
    A3: { name: '人生意义感', emoji: '🎯' },
    Ac1: { name: '动机导向', emoji: '⚡' },
    Ac2: { name: '决策风格', emoji: '🤔' },
    Ac3: { name: '执行模式', emoji: '🚀' },
    So1: { name: '社交主动性', emoji: '🗣️' },
    So2: { name: '人际边界感', emoji: '🛡️' },
    So3: { name: '表达与真实度', emoji: '🎭' }
};

// 31道测试题 (原版SBTI题目)
const QUESTIONS = [
    {
        id: 1,
        question: "对象超过5小时没回消息，说自己窜稀了，你会怎么想？",
        options: [
            { label: "A", text: "拉稀不可能5小时，也许ta隐瞒了我。" },
            { label: "B", text: "在信任和怀疑之间摇摆。" },
            { label: "C", text: "也许今天ta真的不太舒服。" }
        ],
        scores: { A: { S1: 1, E3: 1 }, B: { S1: 0.5, E3: 0.5 }, C: { E3: -1, E2: 1 } }
    },
    {
        id: 2,
        question: '看到网上有人自称"屌丝"、"小丑"、"咸鱼"，你是什么反应？',
        options: [
            { label: "A", text: "我哭了。。我就是本人。" },
            { label: "B", text: "这是什么梗？我有点跟不上。" },
            { label: "C", text: "这不是我！我好歹也是个普通人。" }
        ],
        scores: { A: { So3: 2, A3: 1 }, B: { S1: 1 }, C: { S1: -1, Ac1: 1 } }
    },
    {
        id: 3,
        question: "明天要上班/上学，但你今晚就是不想睡，你通常会？",
        options: [
            { label: "A", text: "翘了！反正就一次！" },
            { label: "B", text: "干脆请个假吧。" },
            { label: "C", text: "都快考试了还去啥（已经是学渣）。" }
        ],
        scores: { A: { A2: 2, Ac2: 1 }, B: { A2: 1.5 }, C: { A2: 1, Ac1: -1 } }
    },
    {
        id: 4,
        question: "你相信这个世界是好人多还是坏人多？",
        options: [
            { label: "A", text: "其实邪恶的人心比世界上的痔疮更多。" },
            { label: "B", text: "也许吧。" },
            { label: "C", text: "是的，我愿相信好人更多。" }
        ],
        scores: { A: { A3: 2, A1: 1 }, B: { A3: 1 }, C: { E2: 1, S1: 1 } }
    },
    {
        id: 5,
        question: "你朋友圈通常发什么内容？",
        options: [
            { label: "A", text: "吃喝拉撒" },
            { label: "B", text: "艺术爱好" },
            { label: "C", text: "深夜emo或发疯文学" },
            { label: "D", text: "健身打卡" }
        ],
        scores: { A: { A2: 1, So1: 1 }, B: { Ac1: 1 }, C: { Ac2: 2, A3: 1 }, D: { Ac1: 2, Ac3: 1 } }
    },
    {
        id: 6,
        question: "走在街上突然有个陌生人递给你一根棒棒糖，你第一反应是？",
        options: [
            { label: "A", text: "呜呜她真好真可爱！" },
            { label: "B", text: "一脸懵逼，作挠头状" },
            { label: "C", text: "这也许是一种新型诈骗？还是走开为好。" }
        ],
        scores: { A: { E2: 2, S1: 1 }, B: { So2: 1 }, C: { A3: 2, So2: -1 } }
    },
    {
        id: 7,
        question: "你会对不熟的人表达你的真实阴暗面吗？",
        options: [
            { label: "A", text: "这种情况较少。" },
            { label: "B", text: "可能碍于情面或者关系。" },
            { label: "C", text: "不想让别人知道自己是个阴暗的人。" }
        ],
        scores: { A: { So2: 1 }, B: { So3: 1 }, C: { A3: 2, S2: 1 } }
    },
    {
        id: 8,
        question: "你做计划的完成率通常是多少？",
        options: [
            { label: "A", text: "然而计划不如变化快。" },
            { label: "B", text: "有时能完成，有时不能。" },
            { label: "C", text: "我讨厌被打破计划。" }
        ],
        scores: { A: { Ac3: 2 }, B: { Ac3: 1 }, C: { Ac1: 2 } }
    },
    {
        id: 9,
        question: "在厕所蹲了20分钟还没动静，你会？",
        options: [
            { label: "A", text: "再坐三十分钟看看，说不定就有了。" },
            { label: "B", text: '用力拍打自己的屁股并说："死屁股，快拉啊！"' },
            { label: "C", text: "使用开塞露，快点拉出来才好。" }
        ],
        scores: { A: { A2: 1, A3: 1 }, B: { Ac2: 2 }, C: { Ac3: 2 } }
    },
    {
        id: 10,
        question: '你认同"只要努力就一定有回报"这句话吗？',
        options: [
            { label: "A", text: "不认同" },
            { label: "B", text: "中立" },
            { label: "C", text: "认同" }
        ],
        scores: { A: { A1: 2, A2: 1 }, B: { A3: 1 }, C: { Ac1: 2 } }
    },
    {
        id: 11,
        question: "你经常感到自己是个废物吗？",
        options: [
            { label: "A", text: "是的" },
            { label: "B", text: "偶尔" },
            { label: "C", text: "不是" }
        ],
        scores: { A: { S1: -3 }, B: { S1: -1, A3: 1 }, C: { Ac1: 1, S1: 1 } }
    },
    {
        id: 12,
        question: "你觉得自己是个理想主义者吗？",
        options: [
            { label: "A", text: "不认同" },
            { label: "B", text: "中立" },
            { label: "C", text: "认同" }
        ],
        scores: { A: { A3: 1 }, B: { A3: 0.5 }, C: { E2: 1, S1: 1 } }
    },
    {
        id: 13,
        question: '你认同"有钱就是大爷"这个观点吗？',
        options: [
            { label: "A", text: "认同" },
            { label: "B", text: "保持中立" },
            { label: "C", text: "不认同" }
        ],
        scores: { A: { S3: 2 }, B: { S3: 1 }, C: { S1: 1, A3: 1 } }
    },
    {
        id: 14,
        question: "你觉得自己是个有原则的人吗？",
        options: [
            { label: "A", text: "是这样的。" },
            { label: "B", text: "也许是，也许不是。" },
            { label: "C", text: "这简直是胡扯" }
        ],
        scores: { A: { Ac1: 1 }, B: { A3: 1 }, C: { Ac2: 1, A2: 1 } }
    },
    {
        id: 15,
        question: "你更喜欢独立还是依赖他人？",
        options: [
            { label: "A", text: "我更喜欢依赖与被依赖" },
            { label: "B", text: "看情况" },
            { label: "C", text: "是的！（斩钉截铁地说道）" }
        ],
        scores: { A: { E3: 2, E2: 1 }, B: { So2: 1 }, C: { Ac1: 1, So2: 1 } }
    },
    {
        id: 16,
        question: "你更喜欢私密空间还是社交场合？",
        options: [
            { label: "A", text: "那很爽了" },
            { label: "B", text: "都行无所谓" },
            { label: "C", text: "我更喜欢保留独立空间" }
        ],
        scores: { A: { So1: -1, So2: -1 }, B: { So2: 0.5 }, C: { So2: 2, A2: 1 } }
    },
    {
        id: 17,
        question: "做选择题时，你通常？",
        options: [
            { label: "A", text: "反复思考后感觉应该选A？" },
            { label: "B", text: "啊，要不选B？" },
            { label: "C", text: "不会就选C？" }
        ],
        scores: { A: { Ac2: 2, S2: 1 }, B: { So3: 1 }, C: { Ac2: 1, Ac3: 1 } }
    },
    {
        id: 18,
        question: '你认同"人生苦短，及时行乐"吗？',
        options: [
            { label: "A", text: "不认同" },
            { label: "B", text: "中立" },
            { label: "C", text: "认同" }
        ],
        scores: { A: { Ac1: 1 }, B: { So3: 0.5 }, C: { A2: 2, So1: 1 } }
    },
    {
        id: 19,
        question: "面对喜欢的人，你会？",
        options: [
            { label: "A", text: "就算ta再优秀我也不会陷入太深。" },
            { label: "B", text: "会介于A和C之间。" },
            { label: "C", text: "会非常珍惜ta，也许会变成恋爱脑。" }
        ],
        scores: { A: { E2: -1, E1: -1 }, B: { E2: 1 }, C: { E2: 3, E1: 2 } }
    },
    {
        id: 20,
        question: "对于见网友这件事，你的态度是？",
        options: [
            { label: "A", text: "网上口嗨下就算了，真见面还是有点忐忑。" },
            { label: "B", text: "见网友也挺好，反正谁来聊我就聊两句。" },
            { label: "C", text: "我会打扮一番并热情聊天，万一呢，我是说万一呢？" }
        ],
        scores: { A: { So2: 2, So1: 0.5 }, B: { So1: 1, So2: 1 }, C: { So1: 2, E1: 1 } }
    },
    {
        id: 21,
        question: "你觉得自己是个容易emo的人吗？",
        options: [
            { label: "A", text: "不认同" },
            { label: "B", text: "中立" },
            { label: "C", text: "认同" }
        ],
        scores: { A: { Ac2: -1 }, B: { Ac2: 0.5 }, C: { Ac2: 2, A3: 1 } }
    },
    {
        id: 22,
        question: '你认同"有钱能使鬼推磨"吗？',
        options: [
            { label: "A", text: "认同" },
            { label: "B", text: "中立" },
            { label: "C", text: "不认同" }
        ],
        scores: { A: { S3: 2, A3: 1 }, B: { A3: 0.5 }, C: { A3: 1, S1: 1 } }
    },
    {
        id: 23,
        question: "当被逼到绝境时，你的执行力会？",
        options: [
            { label: "A", text: "我被逼到最后确实执行力超强。。。" },
            { label: "B", text: "啊，有时候吧。" },
            { label: "C", text: "是的，事情本来就该被推进" }
        ],
        scores: { A: { Ac3: 2 }, B: { Ac3: 1 }, C: { Ac3: 2, Ac1: 1 } }
    },
    {
        id: 24,
        question: "你会经常反思自己的行为吗？",
        options: [
            { label: "A", text: "确实" },
            { label: "B", text: "有时" },
            { label: "C", text: "不是" }
        ],
        scores: { A: { S2: 2 }, B: { S2: 1 }, C: { S2: -1, Ac2: 1 } }
    },
    {
        id: 25,
        question: "你觉得自己是个卷王吗？",
        options: [
            { label: "A", text: "不认同" },
            { label: "B", text: "中立" },
            { label: "C", text: "认同" }
        ],
        scores: { A: { A2: 2 }, B: { Ac1: 0.5, A2: 0.5 }, C: { Ac1: 2 } }
    },
    {
        id: 26,
        question: '你认同"我不需要朋友，一个人也很好"吗？',
        options: [
            { label: "A", text: "认同" },
            { label: "B", text: "中立" },
            { label: "C", text: "不认同" }
        ],
        scores: { A: { So2: 2, A2: 1 }, B: { So2: 1 }, C: { E2: 1, So1: -1 } }
    },
    {
        id: 27,
        question: "你经常觉得自己是个小丑吗？",
        options: [
            { label: "A", text: "并没有" },
            { label: "B", text: "也许？" },
            { label: "C", text: "是的！（问心无愧骄傲脸）" }
        ],
        scores: { A: { So3: -1, S1: 1 }, B: { So3: 1 }, C: { So3: 3, So1: 1 } }
    },
    {
        id: 28,
        question: "你觉得自己的精神状态稳定吗？",
        options: [
            { label: "A", text: "不认同" },
            { label: "B", text: "中立" },
            { label: "C", text: "认同" }
        ],
        scores: { A: { Ac2: 2, A3: 1 }, B: { Ac2: 1 }, C: { S1: 1 } }
    },
    {
        id: 29,
        question: '你认同"人生就是一场戏"吗？',
        options: [
            { label: "A", text: "不认同" },
            { label: "B", text: "中立" },
            { label: "C", text: "认同" }
        ],
        scores: { A: { A3: 1 }, B: { So3: 0.5 }, C: { So3: 2, So3: 1 } }
    },
    {
        id: 30,
        question: '你对"朋友的朋友"的态度是？',
        options: [
            { label: "A", text: '对"朋友的朋友"天然有点距离感，怕影响二人关系' },
            { label: "B", text: "看对方，能玩就玩。" },
            { label: "C", text: "朋友的朋友应该也算我的朋友！要热情聊天" }
        ],
        scores: { A: { So2: 2, A3: 1 }, B: { So2: 1 }, C: { E2: 2, So1: 1 } }
    },
    {
        id: 31,
        question: "你觉得自己是个勇敢追梦的人吗？",
        options: [
            { label: "A", text: "不认同，我只想躺平" },
            { label: "B", text: "中立，梦想太奢侈了" },
            { label: "C", text: "认同！我就是GOGO行者！" }
        ],
        scores: { A: { A2: 3, Ac1: -1 }, B: { Ac1: 0 }, C: { Ac1: 3, Ac3: 1 } }
    }
];

// 27种人格类型定义 (原版SBTI完整人格)
const PERSONALITY_TYPES = [
    // ========== 虚无·躺平组 ==========
    {
        id: 'DEAD',
        name: '死者 DEAD',
        description: '你的精神状态已经达到了"死人"级别——不是真的死了，是灵魂已经出窍。你对大多数事情都失去了兴趣，每天的能量来源是电子榨菜。你是那个躺着绝不坐着的人，能不动就不动。',
        systemNote: '检测到死人浓度爆表，建议适当活动筋骨。',
        minScores: { A2: 5, A3: 4 },
        emoji: '💀'
    },
    {
        id: 'ZZZZ',
        name: '装死者 ZZZZ',
        description: '装死者的人生格言是"我没死，我只是在睡觉"。对群聊消息开启免打扰，直到被艾特才在最后期限前"诈尸"。你是拖延症晚期患者，不鸣则已，一鸣惊到自己。',
        systemNote: '检测到嗜睡如命基因，建议设置更多闹钟。',
        minScores: { A2: 4, Ac3: 1 },
        emoji: '💤'
    },
    {
        id: 'MALO',
        name: '吗喽 MALO',
        description: '你是一只勤劳的"吗喽"，每天在公司搬砖，周末只想躺平。你的工牌照片比本人还精神，但现实中的你已经被工作掏空。你是那种"人在工位上，魂在床上"的人。',
        systemNote: '检测到打工猴基因，恭喜你成为合格打工人。',
        minScores: { A2: 3, A3: 2 },
        emoji: '🐒'
    },
    {
        id: 'IMFW',
        name: '废物 IMFW',
        description: '你觉得自己是"三无人员"：没理想、没目标、没能力。爆了父母金币，读了个烂学校，混日子之后找班上。嘴上说摆烂，其实内心偶尔也会慌张那么一下下。',
        systemNote: '检测到典型废物气质，但废物也是潜力股。',
        minScores: { S1: -4, Ac1: -2 },
        emoji: '😔'
    },
    {
        id: 'OJBK',
        name: '无所谓人 OJBK',
        description: 'OG8K不是一种人格，是一种统治哲学！当别人在为"中午吃啥"纠结时，你已经用至高无上的帝王之心做出了决定：随便。天塌了？随便。能躺绝不坐，你是佛系本佛。',
        systemNote: '检测到情绪稳定到离谱，建议偶尔也激动一下。',
        minScores: { Ac2: 2, So2: 3 },
        emoji: '😐'
    },
    
    // ========== 内耗·受伤组 ==========
    {
        id: 'IMSB',
        name: '自我攻击者 IMSB',
        description: '你大脑里住着两个战士：一个叫"我冲了！"，另一个叫"我是个SB"。当有机会时，"冲了"战士说爱要大声说出来，"SB"战士说你算哪根葱。你的内心每天都在上演史诗级大战。',
        systemNote: '检测到内耗之王基因，建议适当放过自己。',
        minScores: { S1: -3, Ac2: 2 },
        emoji: '😰'
    },
    {
        id: 'OHNO',
        name: '哦不人 OH-NO',
        description: '你是那种遇到事情第一反应是"完了完了"的人。焦虑敏感，遇事总往坏处想，过度担心、细节控，容易紧张。别人还没反应过来，你已经在脑内演完了一百集连续剧。',
        systemNote: '检测到焦虑本焦基因，建议练习深呼吸。',
        minScores: { Ac2: 3, S2: -2 },
        emoji: '😱'
    },
    {
        id: 'BROKEN',
        name: '碎了 BROKEN',
        description: '你就像一面随时会碎的镜子，敏感又脆弱，容易被外界击垮，需要大量安抚。但你又顽强地一片片把自己粘起来继续生活。碎了不要紧，能粘起来就是好镜子。',
        systemNote: '检测到玻璃心浓度超标，但坚强也是一种能力。',
        minScores: { S1: -3, E1: -2 },
        emoji: '💔'
    },
    
    // ========== 情绪·表达组 ==========
    {
        id: 'FUCK',
        name: '草者 FUCK',
        description: '在FUCK的世界观里，世俗规则毫无意义。你的情绪开关是"FUCK YEAH！"和"FUCK OFF！"。当所有人被驯化成温顺的家禽，你则是荒野上最后那一声狼嚎。嘴上骂生活，身体却诚实。',
        systemNote: '检测到反骨叛逆基因，恭喜你保持住了生命力。',
        minScores: { Ac2: 2, So1: 2 },
        emoji: '🔥'
    },
    {
        id: 'WOC',
        name: '握草人 WOC',
        description: '你是那种直率暴躁、口吐芬芳的人。性格直爽，一点就炸，情绪来得快去得也快，主打一个"握草"式情绪宣泄。你是真性情的代言人，不装不端。',
        systemNote: '检测到情绪宣泄浓度超标，但这也是一种真实。',
        minScores: { So3: 3, Ac2: 1 },
        emoji: '😤'
    },
    {
        id: 'HHHH',
        name: '傻乐者 HHHH',
        description: '你是朋友圈的气氛组，永远在自嘲和搞笑。你的幽默是一种保护色，让别人觉得你很快乐。你是那个在聚会上最活跃的人，也是散场后最沉默的人。笑着笑着，自己也不知道是真的开心还是装的。',
        systemNote: '检测到小丑浓度超标，笑容背后可能藏着故事。',
        minScores: { So3: 3, So1: 2 },
        emoji: '🤡'
    },
    {
        id: 'JOKER',
        name: '小丑 JOKE-R',
        description: '你是那个"原来我们都是小丑"的主角。用扮丑讨好他人，活跃气氛的牺牲品，用滑稽掩盖自卑。你总觉得自己是笑话，却不知道在别人眼里你其实很可爱。',
        systemNote: '检测到讨好型搞笑基因，建议多为自己笑一笑。',
        minScores: { So3: 4, E2: 1 },
        emoji: '🃏'
    },
    
    // ========== 情感·付出组 ==========
    {
        id: 'MUM',
        name: '妈妈 MUM',
        description: '群聊里的"暖心担当"，总在分享资料、安慰他人、操心别人的事。擅长感知情绪，具有超强共情力。可惜当妈妈落泪时，给自己的药剂量总是比给别人小一号。',
        systemNote: '检测到母爱泛滥基因，建议对自己也温柔一点。',
        minScores: { E2: 4, So1: 2 },
        emoji: '👩'
    },
    {
        id: 'ATMER',
        name: '送钱者 ATM-er',
        description: '你的钱包是公共物品，插进去的是别人的焦虑和麻烦，吐出来的是"没事，有我"的安心保证。像一部老旧但坚固的ATM机，24小时营业，永远不知道拒绝。',
        systemNote: '检测到ATM体质，建议提高自我投资意识。',
        minScores: { E2: 4, E3: 3 },
        emoji: '💸'
    },
    {
        id: 'LOVER',
        name: '多情者 LOVE-R',
        description: '你是恋爱脑本脑，感性浪漫天花板。心思细腻、爱幻想、容易动情，为爱情流泪，为情所困。在你眼里，爱情是生命中最重要的事，其他都可以让步。',
        systemNote: '检测到恋爱脑指数爆表，建议保持理智。',
        minScores: { E2: 5, E1: 2 },
        emoji: '💕'
    },
    {
        id: 'THANK',
        name: '感恩者 THAN-K',
        description: '温润包容，把堵车当礼物，把麻烦当修炼。和感恩者在一起，你会开始怀疑自己是不是太苛刻了。你是那种永远能看到事情积极面的人，正能量发射塔本塔。',
        systemNote: '检测到感恩之心浓度拉满，你是人群中的小太阳。',
        minScores: { S2: 3, E2: 2 },
        emoji: '🙏'
    },
    
    // ========== 社交·个性组 ==========
    {
        id: 'SOLO',
        name: '孤儿 SOLO',
        description: '恭喜你测出了全中国最稀有的人格！别急着哭，孤儿的"独立"是国王在巡视他那空无一人的、绝对安全的王国。每一块砖都是过去的伤口，每一座烽火台都曾点燃过希望又被浇熄。',
        systemNote: '检测到社恐独行基因，恭喜成为莫挨老子王国国王。',
        minScores: { So2: 5, So1: -2 },
        emoji: '🌙'
    },
    {
        id: 'FAKE',
        name: '伪人 FAKE',
        description: '在社交场合，你切换人格面具比切换输入法还快。上一秒"铁哥们"模式，下一秒"沉稳可靠好员工"模式。别试图了解伪人的真实内心，那里除了代码"指令：模仿。目标：活下去"，什么都没有。',
        systemNote: '检测到社交变色龙基因，但你已经很努力了。',
        minScores: { So3: 4, So2: 2 },
        emoji: '🎭'
    },
    {
        id: 'BOSS',
        name: '领导者 BOSS',
        description: '天生leader，掌控欲拉满。爱指挥、爱发号施令，走到哪都想当老大，习惯安排所有人的事，自带领导气场。你是那种凌晨三点还在学习工作的卷王。',
        systemNote: '检测到内卷王基因，建议适当放松休息。',
        minScores: { Ac1: 5, Ac3: 3 },
        emoji: '👑'
    },
    {
        id: 'HEALER',
        name: '治愈系 HEALER',
        description: '你是朋友的"情绪垃圾桶"，总在暖别人，却忘了自己也需要被治愈。温柔共情，是朋友的依靠，却常常忘记照顾自己。你像一盏灯，照亮了别人，消耗了自己。',
        systemNote: '检测到治愈者基因，记得也要治愈自己。',
        minScores: { E2: 4, So1: 2 },
        emoji: '🌟'
    },
    {
        id: 'MONK',
        name: '僧人 MONK',
        description: '当别人在KTV里参悟爱与恨的纠缠，MONK选择在家中参悟大道。MONK看破红尘，不希望闲人来扰其清修。你的个人空间是你的结界，是你的须弥山，是你的绝对领域。',
        systemNote: '检测到六根清净基因，恭喜离苦得乐。',
        minScores: { So2: 4, A1: 2 },
        emoji: '🧘'
    },
    
    // ========== 行动·执行组 ==========
    {
        id: 'CTRL',
        name: '拿捏者 CTRL',
        description: '你是一个表面淡定内心戏超多的狠人。在别人眼里你是人生赢家，实际上你每天都在和自己较劲。擅长规划，能精准拿捏所有人和事，掌控欲拉满的人间清醒。',
        systemNote: '检测到高浓度拿捏基因，建议继续保持人设。',
        minScores: { Ac1: 4, Ac3: 3 },
        emoji: '🎮'
    },
    {
        id: 'GOGO',
        name: '行者 GOGO',
        description: '你是那个永远在路上的GOGO人！不管是旅行、追梦还是搞钱，你都冲在最前面。执行力爆表，说干就干，想到就做，拒绝精神内耗的实干家。',
        systemNote: '检测到行者基因，世界那么大，建议去看看。',
        minScores: { Ac1: 4, Ac3: 4 },
        emoji: '🌍'
    },
    {
        id: 'THINK',
        name: '思考者 THIN-K',
        description: '深度思考，理性通透。爱琢磨事，遇事先分析，不冲动，主打一个"想明白再做"。你是人间清醒哲学家，喜欢把问题想透再行动，有时候想太多反而错过了时机。',
        systemNote: '检测到思考者基因，建议适当减少内耗。',
        minScores: { S2: 4, Ac2: 3 },
        emoji: '🤔'
    },
    {
        id: 'SHIT',
        name: '狗屎人 SHIT',
        description: '愤世嫉俗，嘴硬心软。嘴上吐槽"这个世界一坨屎"，身体却在默默收拾烂摊子。一边对世界满腹牢骚，一边维持着社会的运转。是清醒又无奈的打工人写照。',
        systemNote: '检测到愤世嫉俗基因，建议适当服用乐观。',
        minScores: { A1: 4, Ac1: 3 },
        emoji: '💩'
    },
    {
        id: 'POOR',
        name: '贫穷者 POOR',
        description: '打工人真实写照，主打一个穷。钱包空空，生活拮据，为钱奔波，自嘲"穷鬼"。月光是常态，月底最难熬，但依然乐观地活着——穷也要穷开心。',
        systemNote: '检测到贫穷浓度超标，但精神富有更重要。',
        minScores: { S3: -3, A2: 2 },
        emoji: '💰'
    },
    {
        id: 'SEXY',
        name: '尤物 SEXY',
        description: '迷之自信，自带光环，干啥啥不行，自恋第一名。进入房间时灯光自动调暗以节能，微笑时空气凝结成爱心。你是人间发光体，自我感觉超良好，是那种让人羡慕的自信。',
        systemNote: '检测到尤物基因浓度爆表，请继续保持自信。',
        minScores: { S1: 5, E2: 2 },
        emoji: '✨'
    },
    
    // ========== 隐藏人格 ==========
    {
        id: 'DRUNK',
        name: '酒鬼 DRUNK',
        description: '酒是解药，也是毒药。开心喝，不开心也喝，靠酒解压，主打一个"一醉解千愁"。这是作者为了劝朋友戒酒特意埋下的彩蛋人格——看到这个结果，就当是作者在提醒你：少喝点吧！',
        systemNote: '检测到隐藏人格"酒鬼"，作者有话要说：戒酒吧朋友！',
        minScores: { A3: -3, Ac2: 2 },
        emoji: '🍺',
        hidden: true
    }
];

// 导出数据
window.SBTI_DATA = {
    QUESTIONS,
    DIMENSIONS,
    PERSONALITY_TYPES
};
