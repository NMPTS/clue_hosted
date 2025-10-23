'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "0d3f24bf80c97fcc2ad07a66f9a21ae9",
".git/config": "79aaa970e1ba31d2f10f02b03e40a77c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "8a3b804d96ae3bd8d05dbfafe4c55e93",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "18189d6e986aedfc07006433ad15e3d9",
".git/logs/refs/heads/main": "cfb60523c138be88ee85593bed5ee974",
".git/logs/refs/remotes/origin/main": "19ad6eef1e154bd502fec286825195d9",
".git/objects/02/d281027b707f616cf11afb9027549fce5a1f05": "e12644c18e2307d6499405d713964587",
".git/objects/03/12a177cf49c76594563c63e07015c20a496a5e": "688ea71d4baec0a57856dcdc357d9698",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/07/7036a0b2cb363c22fae3b6a192b4c9cfa566dd": "982292089f8d0b31c40bea16cd1d0774",
".git/objects/09/08d37fe966bbf4924b046865ad0806da6237b2": "6798b6906bda50a54d5d502c010158ca",
".git/objects/0a/f2c175f469e16903875e4db6ccc4385ce94a97": "12810972e3e44adc15ed664d814718ad",
".git/objects/0c/15138f7da84390469e04a9d0a095fc919be24d": "1af1258cf0d62f9379f825a3202e173b",
".git/objects/0c/bc8652648914d4f03653497098f78ad07d22bd": "6a8a3c755f5c70ab0092a57cae0e9324",
".git/objects/0d/bc4ec135f0c0510075ea5bad61640ed9bd6b4f": "c6bf7f89edea350837704fbae6caba7d",
".git/objects/10/29cfcf2958b143a80540fc8b6cc70aa625431b": "fa89b7e987ae3cd4e58c01b374e6c526",
".git/objects/12/0d0b48b36a93a5079fe8676e4947887c51a3ca": "a7d46659847a49868d1115ba00d394eb",
".git/objects/12/97cb3fee85a7237142c12020425810410457f9": "87558a4f01328468ff94c2e68307193e",
".git/objects/12/e9420b430de6133b74bfd92591d8f54d7018f3": "d15f15b49a6a2c0d51a7bcce7b1d22cd",
".git/objects/14/28644c0ed6a3744e1bdd9f29be7159babc5d9d": "19f52ce3f82cc3741bd7397b8bb0137a",
".git/objects/14/30075b06cd24f498958afd8dc977400cc73666": "127fba6f07f0ddfb56cc1453d4820a8b",
".git/objects/17/6f3ccbc84993b82da69833cdc6955b86917dbd": "84fb6047c36268aea614ee9fc4fb8283",
".git/objects/18/d204cb02459eb5f8780b2f3265560a15f74552": "8918f278fbd7d959f2c978c9ffac4050",
".git/objects/1a/1460755995bc9c489e9fe2874f36d95efc9b09": "94b284391bba81eaf094ada9e2e05522",
".git/objects/1a/201f7d5d15125f983fcc45cfd70604696e4698": "8b2edc26101f737f16a0d733b74c057f",
".git/objects/1a/453bb94a108d5271446effbb344bc8fa807ab5": "e10a72c7b898f6e01a31027d85b7e597",
".git/objects/1a/4d52bbebc010b62341e37480175653502c0037": "d7c0da1bbf4121e3fb9c8739d15c2e9f",
".git/objects/1a/f84ff3970b7ae25f496b66ea9573337597be77": "6a5913652ac2561c8170d0aefc9faf85",
".git/objects/1d/3e48418a787f399137ba0091400eb7890432a6": "425785c917629f11d342a826cb3b94ad",
".git/objects/1d/fa127329d2e0e509bac3d4e34d95823238ef4b": "aec1218fc1fcf9d4b84d423764b9c0ab",
".git/objects/1f/3f8f247a43d48be902e09658afdbef6e805c2c": "c8feabea45d8d672dc14d098238715ea",
".git/objects/1f/c6a2b4e31450d331469b82619c8b8131aab0e0": "be2923509746428ee733a38d6c30459b",
".git/objects/21/0a1543abf76bfef90d97c7f276f5e23bf761c3": "5d27a613576ff5502b227df106d2a170",
".git/objects/21/3c295c3b17ee78a5299a9a82db983711a9aad5": "4f3adbcaf04387ec23927e141f8342f6",
".git/objects/23/99d4759e36b0c87546ba4abcdff4935ae27e83": "80a16744961f8be0a48fc1069a4a67ad",
".git/objects/23/d113b7c1fce7ad258b2f05932e06db0099ed2d": "d614bf6eb6434df68b3ba55f1f00367a",
".git/objects/26/6f45d99a5a921bf29fa5a2d19be6bbba50e91e": "069a2d6e95426f7c2bd2fcdc7f1d7c03",
".git/objects/26/a49698bac4f3722fc36435a28f27bc4d1c2f54": "05a47d6a45308103b392d915c5d26292",
".git/objects/29/2b157ffc823991dfa7ce4cdf93c1fe1cfa997d": "a0e7f9ded3a538dab71461c98b0113b5",
".git/objects/30/8de7a0bb4dfc5081a6c656370ef970dec925c1": "bf4016ff26ba7c844b336e9a2d27435a",
".git/objects/30/b4e49534dcc4edeb7591d30d13ad58d66939b6": "d58f2642d90cedd44988137d94669105",
".git/objects/31/8628031c6a09d5af6605b3822b595706b6abd6": "4b3c24014fd22cbbcbe65a04e1549b77",
".git/objects/32/b146a1d7e570662db06987ce5bebb627fdca19": "32c0686f9dfe1e9cce13ee9a428012c9",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/35/69b97db26e4a651413be4a3d3e55ca2658d853": "5ede66a99f39da2b6d3272f901aa9e0b",
".git/objects/35/76028792a43d6f8a17a3b99e65b781bcacd2f5": "3decf8ca096a7a33e13ce49c034122b2",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/36/1b58af8877c55ed7c3b069dc7a30c6c83ce47e": "ab03377f4d82895ca7141300cb65bf9f",
".git/objects/37/24fe9b14d5eb85d876abdbe8e58753c74c3fd8": "328063f3a207893fb65d37064dbdbe72",
".git/objects/38/1841381908bc6d5f594c6752c7afe8c4bd0e4e": "695727c0b725429a7519d03266ff4e7b",
".git/objects/38/1d18de8281d672b9f098a5da09378f5e414983": "c59788e8a0e39011e78f29621a230ef3",
".git/objects/3b/ad79a93303b55ad76ec7532e04e99abafcd293": "c3071e2e2113187150adf9a29341407f",
".git/objects/3c/ee5a8ed4225d8161c73a818c2886d3a45f74bb": "1b3d7b712226d52e2c2d888d6f17174e",
".git/objects/3d/2b1c599b8831f9c7f3c283afb8a9d5af7153b3": "4f0ee4bdc95adf5aa0ce80a5e946bae6",
".git/objects/3e/584702be2702618de1d5066ece5cfb4b620172": "33a36997475b81a41a1ca17e61b1e2e8",
".git/objects/3e/ca12c4a575d8122b05dfd47dbff97a8cc1af38": "d37b135236ed8fce8103341c8e3a4e96",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/43/9e7f5964f539e703bf36f4ef48e39356d0ce25": "3a3f1ad2217356dd73c5820116b4ea09",
".git/objects/44/4d0e0bfc8da53ccf1ba83c27b34405342c9d5c": "77ca677738c86022be164f1dc37d1aa2",
".git/objects/44/b6424d1030d918209246948237568c424d8b1f": "2c8545ec7451320ca27ebc963ddd16a5",
".git/objects/44/cac0420c7c01ef6c5c86f0cf047811cc1f5a62": "0666565028375f322c618dec8eaec859",
".git/objects/45/be46b99a30c87156076879fbd8cf8b60f86895": "65e48b35ff81d700550863ae5e152efc",
".git/objects/48/2c8b7a99d141dda7c25e6152d66bd3566715bf": "ab3364703f7c59d2bf066e6c491b4cf4",
".git/objects/48/c761ea8034d0ce9697f8eb1609a61e6190984c": "06811648850e49d040c5e7951f61a589",
".git/objects/49/a6d8aae4536139d52929e17baff13e70b144f1": "05803418cfbe1ffd9f62c32532c82544",
".git/objects/4b/aef9a1c1a2f906680097e7767c9efd3bfce6a8": "4f839807f22f7af063b4af0adf4bed31",
".git/objects/4b/c13079750536aaf047da2a93eea96faa5be618": "b8c8b50163df79e2c78d5413b3fee5a8",
".git/objects/4d/839f5c950019a91895dd724532fa22c0a38277": "c9502b6fe0a81170d21ef5f9d355540d",
".git/objects/4e/0dcbd52ae6b91098ec4db7ee4d359da56904e0": "e8a04e00c70dc9545e1b5fa1e46c589d",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/4f/828d01a8c81fc7c73591f97b9f787d65c56c46": "e254fdc2c40348a1c198e37f4fff19a7",
".git/objects/4f/f6a94cbb4b10f0e5d64ed21d1ab228996e47e8": "6338f4409ec9db5f1b71758205cae4aa",
".git/objects/50/6c158c23671452351854d5ee7c2ee6f6be8b7b": "6873f61eee2833816ba1c8ad2587b72e",
".git/objects/50/f3737ebe3df50f3fd6344cc0f2cd2458e6b0a1": "06aea1c265c87bde777fb548b0efe390",
".git/objects/51/261a005cd5b17755274fd7d2bdde4edd01bf1c": "d65fd38643778b36ee2dbe00e9528497",
".git/objects/52/3192c39b7ec0b76d84becb555d790a9d4dd06b": "3d58f4f917d4dd5c74ce02e3e0c34797",
".git/objects/52/be1cfd21e1664aebd80346f90523acd2bd7389": "a9e4a19cfc11c3fda407a92f758edc17",
".git/objects/54/8ed24d4f4cb8a4c82fe27bd7c16133ba50a4eb": "f93b4a7534719bfe97682e791e591969",
".git/objects/55/c9a70b0675ec6aa5576c116ae293e40a5637c8": "b1a49dc49ca4749af8f145b7ab65f40e",
".git/objects/55/d71479f78d4cb24f9fa603ad9916a4b95c566f": "fcc837f84aaca4fd5ae1d917b0b34866",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/5a/9d7c0e0c91a4ddda3fde3b4fcae9a63e118a2f": "bce9cca6dbec68acc0832922bed5e6d0",
".git/objects/5b/f347c69194d0ba501322e1c38dfee0801eb924": "912492070a3ad47d6bceeccbd851c406",
".git/objects/5e/6de5ee5fb67452b7887a13ceb970b8ac12183c": "fcde9f99cf77e1f4d701f321e29aa5c0",
".git/objects/5e/6f1dec868b29edda3b1552834c354c4b51a21b": "dc5c0fef723dc9ec3d4e97a2d4a99e58",
".git/objects/5e/d13f9b0baafda61494275f3aabbf0e58599eff": "3115c39283806f5b81bfa7c1023bf77e",
".git/objects/5f/9a55c16ff179ea0a93b75fa90812f191529930": "8b1be4e8750c9fd2908b738befb825ac",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/60/ebfb1bc2f045229af9003eb81412c804abda08": "437d123bb42f908377c3dd65c65819d1",
".git/objects/63/e50b7e903a5c8cdbd18116d5eb15eab96399d8": "f98a0c216b8c28e5cbfd6fdcc2dca417",
".git/objects/64/29f4b37e2972de8f96e141c41c51b51fdb9ccf": "2aa98d811f494a88061e8d7c921dc998",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/65/060d25faad7ff2989f31e8d5905b94199fce43": "144d1858d7bcc62b7b1b52ffdf7e82a2",
".git/objects/65/178023997ca90e4b069d300830c0bd794c83a0": "4a300bdf37ac23b4588c86fa16a25cb7",
".git/objects/65/de01d539d5d358444b94a69452fe552c2b9e29": "cb9efbce60343de9b50eab5e8e188ac2",
".git/objects/66/56689eb4e9b9bf2b25b9a6aa5f2d1040626dda": "e499239830cae47d0db2ff62c44e563a",
".git/objects/68/8f2434dd87d07aed5b3ef161ae5163fcf3d22e": "9e9330cb42c61911231ff743ec40e609",
".git/objects/68/f44d79139ac746c76c830f61f3b5fca83119b1": "c9fd46e40057f32dee2d327d3a3e9885",
".git/objects/69/07f23f52e893406862ef5da81192c53f9b27c3": "b4c5ae306bb0bb527a3039b285156110",
".git/objects/6a/27d5a4aff64862199d7dc316c8e53edac5e4ce": "2971aef4970b7584bc943bea5a112b9a",
".git/objects/6b/14ab4997086385332a134763006705b8d99b77": "0183601d10838c759f7e7abe548e5840",
".git/objects/6b/375fc80a7c69dd0b6526255ddb177016f553a2": "e67ba3a5595b95374b11a5f9a86675ac",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6b/eb42050631756e08f35765960931e36ee1961a": "e4ad6d2a87d568956337351fa7c75fe9",
".git/objects/6f/2468aade4760b3b9c07bf10f49320c86cbb3de": "a944a653ef1d89f4d63f3ec6d1a07fc2",
".git/objects/6f/55a29fa0a7c0c3869266d1af834c1ae1befc55": "7709c58e94ce3077b7314be9c56b494f",
".git/objects/72/178715052df69602829c38a11f42a521e4b3e3": "5b5410991b510b9c68aa1797fccc10a8",
".git/objects/72/2b35bc515c347b1ad91b6b3da0417d64a07f71": "e895049431b6ad7eb1455cce3b6335f8",
".git/objects/73/a607e1b0ac1daa63e3d59c77be63d42be9fb51": "7cf10b318ee410871a2968e6983c6fd4",
".git/objects/74/1d9d1a0fc7896d2a4c8784b3ae54a24623061b": "ecacc48467e456e6deab48181a86446c",
".git/objects/74/c8ee2578ac479a57626f478f1151c6a71eeb86": "0398a9e0b496bc2ba0a3edfdef35cbc6",
".git/objects/75/476261992d5bab64c73f519fc75cd262848400": "00cc30cd41b839f6febf0210fbab46cb",
".git/objects/77/18caafa06340cb6220d3a11dd5ae993d17c5fb": "9c6caf78da3d355c3027626b09d49f4d",
".git/objects/78/88fd1c62181cdbb58521b2ffdb37c248c5dc24": "0cec805f15d02ac4f489c1ed84c4f37d",
".git/objects/79/8fd4aa99be668cea8e4a52ed0c1858c64e0e6b": "4024c5578a56faa90327416b6e5ed313",
".git/objects/7a/0476a0621875a3a3bf2762044fbe5e17abd869": "22c4d9f2f50a1fa6146b8f230a7e01c0",
".git/objects/7b/39ba647ab4a8f0b04afd8db2da7440d8bb1584": "a0c74617ce7cd1af33491fa5007588c8",
".git/objects/7c/419c3f828a041930797c4cc4c386f8ee51a5d1": "b7f968eb6aa8b04c5019236cf0d73a32",
".git/objects/80/71b117a73c26b27178c2b13a0305e0f1e8cb25": "eefd6ce0d04c28783dea653a657a5cec",
".git/objects/80/d36ec79020c0822cd0f9b31e3eeef1a469e2e2": "6139cdc101fa4e0d3eeb26d24df5ae7c",
".git/objects/80/dce71038b0df4178d2657878e928b66c67c5e4": "d7a9510b82bc90d7eb4c605669dc49ed",
".git/objects/82/7a55fcb4fdc5d2d17ed3c3afcb44c12a31eaff": "4b69d81584ba33f32f0e9797fc86a51f",
".git/objects/84/32bfb47c0b3d5532acb5d1d1ff9c5253939243": "545089107092e97c2ffb2c02c0d66a23",
".git/objects/85/29361e0a4f72216b4139bffd7de259aa7cb461": "72b075653961419d2b94b2bb80a5eb83",
".git/objects/86/59c0f9ae63a6d7f820ed25371165b94f8fc6b6": "95bb7db8c5d8d1283f6d6dd3e42c5638",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/8226b20536902704b0685c4543e210801b4ca9": "140f61a5320b46d7b9c575bb4b995bae",
".git/objects/89/d35da7e6424464e93874c70469ef2265c66a76": "76fa36b4851871c3e3459f6fc7fe14bd",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/c70224d24c01e866129a91e94ce385f28014af": "c39cc75ac53cb485cb20113d3de7535e",
".git/objects/8b/3dbaa6d8a49647ac948b6695f9ecf85d3ad662": "4baa8357319ba288c70df99e05b21a6f",
".git/objects/8d/c70b62c387fc5a201fd7f18a7ebf88413d4035": "73525a17a73d6505e13900ec9f7fdbcf",
".git/objects/8f/edc6d3fda38b314498552529d7ddd7a7a7eee0": "5e0d8efd856c0af2c2e0fb379ab81d9f",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/93/34b04befe1a144f7c5bcbe4910f05db264d888": "71a89784f04c3e0400ffe3300e4ce2ad",
".git/objects/93/86979fad4260ac8b1e3bcb4d1fe3fc3d82c63c": "4cf71f1073d6c89c1929cd5d19fcf455",
".git/objects/95/a9ffdba3f78bd3e7839e9fb91692906e35afb4": "181362aebc3bab8076a6e85480c776f3",
".git/objects/97/b2ca82402eb7a819954fa72ecf625a82af28cb": "9c9fc1d8ec41c339fc12b625ae369263",
".git/objects/98/be7a5583018eb897d5a93e58462b5e14dac87d": "fcf5be267b95f253fdf055a2ddd92d84",
".git/objects/99/59c7c358a821b3afea81f07da793d82ec44cd5": "2585dfef4a75071b0ef2050bff7673da",
".git/objects/9a/236826bfbb686b3d9ccc5a203984d074fc27a2": "bfdfc564ea86dcf3375aa9fb25ac3dfe",
".git/objects/9a/740fe30bcc9dc12699d2a576260de37940cabe": "aa3bcac8a79a4acddb96dc02adc2cc06",
".git/objects/9b/2a5445037c9665c01416987169304a6c6c6a34": "6bdfd4080943a2e832cafdd05d36c68b",
".git/objects/9b/69d7c5489c6970a96d59badd99212052f85eee": "dd3f2c19d788fc7f92a3c7aa299f1dff",
".git/objects/9b/ce95bf384409e79d379c758ea495f9d4fa3964": "d79ea08f4585fc41387e0f0beb3be201",
".git/objects/9e/25f69719d6ea4e4aa78b892bfa4c34d4f06c5d": "a96e4187442e747c7bf29351d2da75c2",
".git/objects/a0/38bc16cb948235d1f8dc23c4bc6f29cbab94a6": "ab9247a8580eb6be1ef50c10b0bf00c6",
".git/objects/a2/58f096fbbeef56e1e9dce598c3ff37a28028e8": "afc7e7733bc30bdd9ead5452da7c73aa",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a6/4dace483ea7e8826d0152d0ab6a9e51142ea37": "53a7ae1aedc6415b60c03b61b67694d0",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/a8/8d94e13763b055f7d7ee1ec193a40719585846": "afd4373cd86692721e7c15f2c40a8cf6",
".git/objects/a8/d868b9b12281583c00216011e1699da097b147": "dd4514aafb5fd1b7bbfc556fe972c17c",
".git/objects/a9/758acf01b9e0740c413e86a343a1a810f5ccaf": "59b870f3a2a077201e029ae19777c95b",
".git/objects/a9/efd4edd6ecc5947acecbbf98c868609f02290e": "fa4ab09c608797bcfb1ac34b05254aee",
".git/objects/ab/32ad27a06ad4bf98dcccb6d58bbc739dd32603": "b9b75b61f05fb7c6e33f9ee6b449695d",
".git/objects/ac/0f7c4f9a4aba5547a2632e5db5e810c5253fed": "83c7ff30b950d8948030ec38aad42e4b",
".git/objects/ad/19c503e2e4c7e7b127667ec169e8638c66d065": "2fccc49afce10448d6296ae9865b7d9c",
".git/objects/ad/1ece1d44b17903a9fe3d8443aa0491f3945015": "a2814a2f9072f9bde5834b0193f74f44",
".git/objects/ad/2fdd2af0205171edffcddeb7c881dc7d3273d9": "6ac3a3ee8ca407d24cfbc4d3a159c1c7",
".git/objects/ae/04372a002ff2ea8f7aff8db57f1377caff8a47": "7c11992426a044ec34862d7975b23f90",
".git/objects/ae/2d52595f6a9ac32637433dd30d4b8b30158bde": "53a4a265188f8bba3f04d5ec1a7f43e1",
".git/objects/af/cbd90fe2f2b80272d3ba2a50e366c493f39d5d": "64a0b44d737403add3478488e00965dc",
".git/objects/b0/19e5012e77f277c65cd5eea9722e9ab1e4698e": "011d67bc632c6ce01612e9b7eb9a0d05",
".git/objects/b0/e7183da31118391affd34430e53362f16e9af4": "296d18913714fa59b5dbdc086ff73bc6",
".git/objects/b1/5bca22270bfe23ba5cb4cda1c3cb5d1c1a4b27": "49e9438f45b24de8587b7a4fd8c2e08c",
".git/objects/b2/362faa1095a4eecbf5a929b157880e8dbb4634": "f8f9c50089af706f3a7b9a5428460375",
".git/objects/b3/99bd203634043651dcd7200b8af5b960d3be3e": "a546368c4256081283912167d22c863c",
".git/objects/b4/5f022420a1456492d05bde65d3b4a7cc1dbaad": "1ea4993ef61c2749d72cd56031e6238d",
".git/objects/b5/815f412c85ef0b8f11662111ef60d8db10bf28": "e0ae99b53de89f7d9e403c8643539fc2",
".git/objects/b6/1738686efcc10e8a067d38fd27e017843d8c50": "b941ead257c9c79e85de2c40dff661ed",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/ba/32bd65a219248c56f1e60f6cfe75edbe4a1cdc": "2958fb8277030cdde6f734d99c1ec881",
".git/objects/ba/3dbd5ac8167c5d807d2cd5e29ab1e733f892da": "71227c492a6515046a6977eacff2f812",
".git/objects/ba/5edd988326aba04e42b64c6ad0acdc50589ddb": "db6e2f21808bcd06da8275513dc74e46",
".git/objects/bc/3408d7b721ae56880e3f079f5a1d40dcf78781": "98973bb0e5d39e0269237cfb2d402b0b",
".git/objects/c0/046990b0b992d914c58dd5b04bae3a5803a5f6": "52db913389af075a106ed92be1264213",
".git/objects/c0/1ae88c763c16f6d5b815304427ea1696a4ad56": "8355c7b3bb96fbc0760e8b16e327c827",
".git/objects/c0/a20b4ecc3617e8b3efc32be6b986f47bb2987d": "ee9381e328fe1df4e53dcd89bc6ec750",
".git/objects/c1/1aaa3066ce63fd74ee7206c1616b7340510ea7": "d0b8977b63c17bb2ccb78f31be1163b7",
".git/objects/c1/382293dfa6f99c06b4841b4b25ca490557a907": "ec5af0682da0f42accffece928abcb5b",
".git/objects/c2/3f97b072b16150fd2063ee3e7d8aa3a18acecc": "42a2ce4b670a15c51736e39571f1dc9a",
".git/objects/c2/8df5a35549443ac517c31d9580adee6fdb3e9f": "a32d85c788c1aa006850a6f9d43c5430",
".git/objects/c2/93a5d10f375329811a6829a964178f2ff78866": "21810c4d880f67032a67ee4ecff7c977",
".git/objects/c3/3246f2e16bfe62d8aab4ded61be44710c7a8dd": "e4e154ecfde3306ae3ede1f91ecf0067",
".git/objects/c3/5c3582bb94d20573cd03a21c54eff5d35780d1": "a3535637f70fdbcb1eab7c7c963f5fcc",
".git/objects/c3/8976bae11b912642323df740b191909656e387": "7cc115079ebb790a7a692968060926d3",
".git/objects/c4/8b9f5d4ecdcb7c3480d9ad51d6b2ef875a0a4a": "71a839602624bc74bcfa4e6dc09026ab",
".git/objects/c5/5513dada0dcf1030a34e45d4e67f0fcf656849": "1eb7fefa2e594e1f1dd35b3e88ee23ee",
".git/objects/c5/f04ef02453eb72d106a026c6aa2be97a700c42": "e34352dd6a887050024f9db4fe6904b3",
".git/objects/c7/22f888254debb127aaf70d37b109aff26c617e": "456ef42a8c72ddd9a6175fd9ae6d7411",
".git/objects/c9/8616a81c807658bc14cd67af50913d1d18a958": "b065b9515aab131542c7fd37b226ce25",
".git/objects/cb/8b9d36238ce229b870285634354316d00e2845": "aa9597414186c3916bf1b34a3ca328e9",
".git/objects/cb/acf2c1c8248d12811f9373d3424362d3985747": "79ce4e6a8734d96a8e807481391f77d5",
".git/objects/cc/605154910b784d57a3e08e4fbb4cfff1f64690": "85d7a2c6c83da3de34c5e84b96627236",
".git/objects/cd/cda1c890e4b2e3889a2bd0a56aa6deac825fbd": "8205c97cd11c0e2982b62020e2cbc0b8",
".git/objects/ce/5f279723eda2d78fd5b1c8bf6b9bb06f569373": "a8d24b1dc4bc671d6917505ffaf3ef93",
".git/objects/d0/266b7692bd07042f278ca4ddbe9f747af992b5": "a5ba0118d9b35217d873e7803ad3d232",
".git/objects/d2/1086c6f835830b9e54e6691692080dd9c5b598": "f858ee5c9c9feaf434802c0a1444d756",
".git/objects/d2/d96bbe0ebf840e5806e1b297d19679b5e15691": "f4cba27f0036d25db054f749182f1d53",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/363c2cfe3775ed123bc0998b99edccf8372dd6": "ede9d7435d8f9f22d8108188d1d85034",
".git/objects/d5/d743e5a08cb74a700476c5958733960ff4b9e4": "541a86e6d3538934eaf425c621a993af",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d8/9e8fcb24c5c2d7f65ed39b5669451e4fb9ded2": "bc427ecd8b003231b163a1fa7f825e8f",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/d9/f33d24c0016c91e6f3c24741f0a93208c6758f": "d56381a373444f5304389839f5f1cb73",
".git/objects/da/2bcfd6b03b0501a345c4d7434c9d38cf245e70": "aa4e76abe67044eb1168a473673224a6",
".git/objects/db/e1f827ee984db04e15192861b2e90e75145efb": "eda3bfc9c33ab8b92dd54907fc17dbdb",
".git/objects/dd/8553dff6c92b6bfa69a3f3108a32006346f8fa": "f56c8cd7b13ba3f8a1b34c869e3e23d2",
".git/objects/de/291594234411e6d084d0c42800cd79dc8d3619": "256b68fb55ab3661f13b16a222663461",
".git/objects/df/1d37d4ca81ef85a8bf2dc51166b7485fccb52f": "54ea7727876cdd5a8136f55e1a89b997",
".git/objects/e5/38ce63451fbe1a5723b4e528c0b7edecedc003": "fb952539b82ea7b576ac4a164718df61",
".git/objects/e6/391a47fd047cd048ab1b10ba1d33f5ef3362ef": "f1537220866f18e314a57e85304fa865",
".git/objects/e8/86d76fbdeda0cefb791878ff7f10f8026c399b": "7a9c48ec285327c6fc117c49d288a8af",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/6ad349145f9ace4e81b0c65f9fc04c6548b8c2": "2f0b407122a46065d1ec7baf902cbe54",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/525d4f8ef990447c7e091c3ac546803110c1cb": "a4fa69e186895efb21a92826a7f21f61",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f0/277405c7391490cb28c1f9b839be1a400bea3f": "0bc11a1e935870a8236ead9eb24daa12",
".git/objects/f0/37463d9ce12ebf50d62a86ecf36c713dd3f27c": "c0f6fbf934d22863264cc1ea4d556c4d",
".git/objects/f1/878e4235c8d322c5d7a4f47814224d1ceb6947": "7adba87d15c8e5abd45e41c24315be96",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f4/275348cba3e31982797599a8301334599df153": "af5c524fd760088bf6d291be9a871ec6",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/7ae6a47bcb8772722ee79e218deb58d9e45e0e": "420bdbbcaa578a59e7de51ff558cad7a",
".git/objects/f7/a5e1c6e774baf23fcede51d33b433ec71f0c2f": "f7edfdce7f721534d2eb4a405ecef312",
".git/objects/f7/bbaad76f2104f705c9447643c93d55e4ea2030": "d722aafa95ce316c6b956e67fd4a50d1",
".git/objects/f7/c1ea040b8580c4f6593ccd5c999e13302bd37e": "2e741d44ce969e87d3c79481fbc13e00",
".git/objects/f8/3260c9f3880a70b3506e56c0f11143869f1a21": "585cf9158fa717d624a82b81d2b891d9",
".git/objects/f9/5f5abc33a21887bb88ae72ad52c8337fc9c0d1": "9aa2653ff0afa0fdf909fd5c77a0b906",
".git/objects/fc/55de027d7df9cc622de1e93054efe106bf61f8": "d6103f63a9c8e756b12fdfb9b5e691bb",
".git/objects/fe/ad6313ad43e8f967d13bc73054b0fc65e8c012": "4afb76065bb1e7b17599cdb3abd5b3a0",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/refs/heads/main": "817f7ab899152c4f7b2b9e88aa516c22",
".git/refs/remotes/origin/main": "817f7ab899152c4f7b2b9e88aa516c22",
"assets/AssetManifest.bin": "8c2b77d3c78e598f56c1d2cb4098ac3e",
"assets/AssetManifest.bin.json": "3b2cecf40cb2562a243c06a3e1627829",
"assets/AssetManifest.json": "c93c4ae46622dee73d82355779ac6269",
"assets/assets/fonts/times-new-roman/times.ttf": "fcb8965acd0e90c50138958a2a7e0421",
"assets/assets/images/admin_sign_black.png": "e47f140d066bf05753e2adbb63324c3e",
"assets/assets/images/alevels.jpg": "62c056242873d8f3f70e1ba359bd89a2",
"assets/assets/images/avatar/a1.PNG": "9066f1cf00e28106bfc687d1bca2b68a",
"assets/assets/images/avatar/a2.PNG": "867549909a5e8f2ccdbd49653f5a5e11",
"assets/assets/images/avatar/a3.PNG": "b6af3107094a49e61c5e9c58983eb28a",
"assets/assets/images/avatar/a4.PNG": "5d47019c5913b4dd6270f2e9bd30d5fa",
"assets/assets/images/avatar/a5.PNG": "061fb306bbdb6500b831d39f936a609a",
"assets/assets/images/avatar/a6.PNG": "b2fcdbbf661c126dbf56779d3b10695f",
"assets/assets/images/bg.png": "8960c11bd19bd41645e492886ded2f97",
"assets/assets/images/chat_rounded.svg": "ba178a2a2e1927473cbba6b0bac8e642",
"assets/assets/images/CLUE-1.png": "eb036cd4decdcb22b0ba7f753b7909b7",
"assets/assets/images/CLUE.png": "a7f5be95743227cead194455d8332734",
"assets/assets/images/clue_dark.png": "f254c2b44bb5075ec1f37eb212effc7e",
"assets/assets/images/clue_light.png": "92bd69ccddde3157ac98288e62143245",
"assets/assets/images/cool-background.png": "b5e56e483c3d7847d21b90062c59d7d3",
"assets/assets/images/docx_file.png": "4a94936febabe8ddfa813cf25db75dee",
"assets/assets/images/favicon.png": "1676a26f7e4a2f6ecdc2dcf2b259d53e",
"assets/assets/images/google_logo.png": "b75aecaf9e70a9b1760497e33bcd6db1",
"assets/assets/images/ibdp.png": "847f97a5539c15f6b727915e334172dd",
"assets/assets/images/ibmyp.png": "16c0f2297a4a9ef18e55d0f3ae194783",
"assets/assets/images/IGCSE.jpg": "78d732254848e74b261cc6fbd4001c96",
"assets/assets/images/img_file.png": "9b56b7a86f949b449fc8de7270faca71",
"assets/assets/images/l0.png": "621fbc4c9fab8f9f97d3e39a25c71ed4",
"assets/assets/images/l1.png": "a42f7154753556bb357ce0525d9f836b",
"assets/assets/images/l1b.png": "4c5e1c095144d98e1677f104dd9b70fe",
"assets/assets/images/l2.png": "78d95ad05e78bedc94ca8d42bd9d676b",
"assets/assets/images/l2b.png": "29848a182808cc8653783fd678c9c14f",
"assets/assets/images/l2c.png": "3bef4b9efb3f4781c2870d1eb85b5eae",
"assets/assets/images/l3.png": "1a0a5376e33b2690fb06b51521bfb144",
"assets/assets/images/l3b.png": "b60486535bb5297f7555f922611f175b",
"assets/assets/images/l4.png": "1c9069354a0b6c7b7f10e7f957ed15f2",
"assets/assets/images/l4b.png": "e1c684aa3c2d8f613c57e9f91121e973",
"assets/assets/images/landingPageMockUp.png": "375a072cda72f27d12f9920f61553fef",
"assets/assets/images/landingPageMockUp1.png": "b9733c22a3011b16601d308a9ec3e79b",
"assets/assets/images/landingPageMockUp2.png": "16bb082d384b24d5240bb601d8ed44bf",
"assets/assets/images/landing_bg.jpg": "6dd60b7e0712920e08827dd524df78cd",
"assets/assets/images/m1.png": "b1415971219fcb31703a4785263d7f39",
"assets/assets/images/m2.png": "0eb61aa8db4108cb5891acd72cb377cd",
"assets/assets/images/m3.png": "a696ae9c65912c575a80df8774866d04",
"assets/assets/images/no_data.jpg": "5edd86b9566b8c5525c47e4c15af22f8",
"assets/assets/images/pdf_file.png": "bc598ea9830c59bbfeae5e0782dce15e",
"assets/assets/images/public.png": "1ec2e2a64d9852de23cfcade1b5022fa",
"assets/assets/images/publicContain.png": "2a9d1f559a7827d523f70bc18fb15bec",
"assets/assets/images/quote.svg": "4a629fccf7abd1cf396567b379fe1baf",
"assets/assets/images/resource_file.jpg": "1271239db97f4747590f9b9f88746b6f",
"assets/assets/images/sat.png": "274cba862764f19c686dd92adb759ae5",
"assets/assets/images/space_bg.webp": "0d42447c62788c5fc389287610429d42",
"assets/assets/images/student-guide/adding_credits_1.png": "c409f5b43e0b74a337d4717b590a7455",
"assets/assets/images/student-guide/adding_credits_2.png": "c58823bff30105175f6673e677724501",
"assets/assets/images/student-guide/explore.png": "f78d381dea10e9bfcadf3f226d32f7ba",
"assets/assets/images/student-guide/registering-for-sessions-1.png": "615901aa1d8cb7fd04c5605c733adaab",
"assets/assets/images/student-guide/registering-for-sessions-2.png": "f25b7ce7331c0d3e7e2d834e473dd16e",
"assets/assets/images/student-guide/registering-for-sessions-3.png": "7051fcf67a48fc528a592c777f370528",
"assets/assets/images/student-guide/registering-for-sessions-4.png": "6a7756d14b3fd436154bcf60ab650c99",
"assets/assets/images/student-guide/request_session_1.png": "b0c4b8df3f140c27b5ea9190b54809fe",
"assets/assets/images/student-guide/request_session_2.png": "4dfef64d3de140cb89e2b8bf39056d3e",
"assets/assets/images/student-guide/request_session_3.png": "ed21bc525d446a86bb68930ab72ecb3d",
"assets/assets/images/student-guide/request_session_4.png": "ea7527e9ccb0e54a2323a0a9977e78bf",
"assets/assets/images/student-guide/request_session_5.png": "e8612b47bf281f51fa5bd9898b0c0b0d",
"assets/assets/images/student-guide/request_session_6.png": "ac068fa49217654226e7c4f39a1d28fc",
"assets/assets/images/teacher-guide/charging-for-classes-1.png": "e89106e8a15a25305fa39981333ea408",
"assets/assets/images/teacher-guide/charging-for-classes-2.png": "3b9a9be2e04b97eac019d05085319c9c",
"assets/assets/images/teacher-guide/create-new-session-1.png": "f10af4eb843b34418a9c1198a4c0bec9",
"assets/assets/images/teacher-guide/create-new-session-2.png": "b3b140ee03440704bd9c9942c2476cb5",
"assets/assets/images/teacher-guide/create-new-session-3.png": "d72182d4f31517e3461072c1f02a81a2",
"assets/assets/images/teacher-guide/custom_credits_1.png": "65f7b6fd800e54d43ad1faf8e7dd4400",
"assets/assets/images/teacher-guide/custom_credits_2.png": "eaf31e2d8b860c50c4445def9ea96dac",
"assets/assets/images/teacher-guide/custom_credits_3.png": "8005dd1f52f1d925617cd2ba7ea9a58e",
"assets/assets/images/teacher-guide/custom_credits_4.png": "821242dded1f0c3d2d8a7d1da3fb2548",
"assets/assets/images/teacher-guide/custom_credits_5.png": "533e74f7056da8d36cf1d52b720e9fe0",
"assets/assets/images/teacher-guide/featured_1.png": "e405a42dd0db95eada2b4af868c195eb",
"assets/assets/images/teacher-guide/getting-paid-1.png": "a405ad5d1a92b4860b4c84f1aaf55810",
"assets/assets/images/teacher-guide/operational_efficiency_1.png": "a9b0ac099c507eaa463c176f34073469",
"assets/assets/images/teacher-guide/targetstudents_1.png": "8c0169dc42efca24a0a0d0a07eb826cd",
"assets/assets/images/teacher-guide/targetstudents_2.png": "4235ceb3a194c6581ba0392fdbffc686",
"assets/assets/images/teacher-guide/targetstudents_3.png": "b4d1a7077aed06dcede5d5ed4195e9a5",
"assets/assets/images/transaction.jpg": "7b74cf3f474193de745b18afc355e6f0",
"assets/assets/images/unknown_file.png": "864ea0d6ca1668424847b7321f449b37",
"assets/assets/images/woman_with_ipad.png": "65a085a9105683229efb8b52a941f24a",
"assets/assets/images/zip_file.png": "436c34913f0fadb030c28ff8e0cb9f74",
"assets/assets/lottie/chat_rounded.svg": "ba178a2a2e1927473cbba6b0bac8e642",
"assets/assets/lottie/error.json": "041c6a4958f0e3206c32c668331aeedc",
"assets/assets/lottie/folder.svg": "a15ee0c426b33503db223bd1f7350d26",
"assets/assets/lottie/loading.json": "fbf8da3d6b7b1ec42c001d1257455310",
"assets/assets/lottie/messageLoad.json": "3ceb577aa58fdb646708e8c6babe4a2c",
"assets/assets/lottie/scroll.json": "805bb6087234838ec219459dadbb4002",
"assets/assets/lottie/success.json": "e1bb1741df24cd6b3433f4081d09c2f9",
"assets/assets/lottie/success_loading.json": "21fcc4ab65e33b3476db11de920590c8",
"assets/assets/videos/ai.gif": "a1400047d7e7b26a6cb4586a999679e6",
"assets/assets/videos/card_1.gif": "d1b6ec0033858fa09061bc6e4d7ab1fe",
"assets/assets/videos/card_2.gif": "28ef0bf8c87af81d535613a9e6e5cd56",
"assets/assets/videos/card_3.gif": "ae7530f5dc33fbef03c1f1b695e147e2",
"assets/assets/videos/clueai.gif": "0cbf849c1dfda4dd4184684f5dfb043e",
"assets/assets/videos/landing.mp4": "d1dd27493b7b135e32f8194adc96b0b9",
"assets/assets/videos/landing.png": "6414e454fe63e774fa8ce8e3fb8afdd8",
"assets/assets/videos/landing_lottie_1.json": "078419da494877a1752b36ef37b55084",
"assets/assets/videos/login.mp4": "5dffdf9fc54a1b4d9675aeab51792b18",
"assets/FontManifest.json": "b0708780526311f7049bc1e28608e864",
"assets/fonts/MaterialIcons-Regular.otf": "88a9360448814793ad086470b523ad7d",
"assets/NOTICES": "b641a98bdcb1767bcbc7f312e3b2d585",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.ico": "199f8dd24e3970637b14599574cfac10",
"favicon.svg": "b2e3214aef80b4c42dd224ab5ef4aba5",
"firebase-messaging-sw.js": "f742936b2fb9a3a761d6ace5da563286",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "a96b04deb5742d1617709fd44663288b",
"icons/apple-touch-icon.png": "7e6b2bd14f91dac2ae57a6c0302f9fbf",
"icons/favicon-96x96.png": "5605fb0fed63b204f18bbe784c8a5431",
"icons/web-app-manifest-192x192.png": "058650a0e36c666e01a05ba5b954d5ea",
"icons/web-app-manifest-512x512.png": "d2de868210b72637d4ba2a2bd1ad1fa9",
"index.html": "f045ececf6eba0d1d997968562c42a57",
"/": "f045ececf6eba0d1d997968562c42a57",
"main.dart.js": "909e8d4e673b8d8aa1582cfe2bb5938f",
"manifest.json": "5558b68b9996e3afb36c9083afbddb62",
"sitemap.xml": "d863d6a79a6ba3e1279bf3b182a1e631",
"splash/img/dark-1x.png": "c110fa3cfcdfa858709dcdde952f59be",
"splash/img/dark-2x.png": "39b744961196f1900cd8f3d33d93f0eb",
"splash/img/dark-3x.png": "170ee8429353109b9b7e2bb374c8c37f",
"splash/img/dark-4x.png": "9510e1625cc0eb735babf3a0798bffa2",
"splash/img/light-1x.png": "f1ff220f213acbfb81da7c6c4f47535a",
"splash/img/light-2x.png": "5c0da27a0269724f3bdebe230d48594b",
"splash/img/light-3x.png": "b9386d3a7e88c0a87409d8a6acb28c52",
"splash/img/light-4x.png": "b0ecde75c4b0f0a2f4a296e619c1ceb8",
"version.json": "ba42f4971c71ac3f6c5330e167b6fac5"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
