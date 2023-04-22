'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "93ac11bd1ce63d0041ce06684c6a0afa",
"index.html": "b1143108a286398937cc628db1d796d3",
"/": "b1143108a286398937cc628db1d796d3",
"main.dart.js": "acdc832dd7072d46e8e33638cc98494a",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "3efa812a0c29d93b5928a89e70466793",
".git/config": "d212df4688cd9c2d0beca6a07c0f64a1",
".git/objects/0c/d06c464b2a7e596018125a3689777c02e96380": "fce66c7681cd7a0559e2467a6957a338",
".git/objects/68/f89cbfd3440c46c9917b26a4f05891215c6e1b": "001def9ae77fdb7980d92589b4c60958",
".git/objects/03/d6b91e509f4720b3146fbb3e3e50f69975061e": "e2f43559b7f94dcb0ec16ac3d6b95c44",
".git/objects/04/c2c2bafbdac381411371b14870878917851651": "d312b983dce6111d01a5ecbf99b317cb",
".git/objects/6a/5cc319ba2532f6caa1fd5f3bdacea681727c07": "926f362c3a4533e25206415282cd7c1e",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/51/c5e143ac2da3de418d6953694b157764b174b9": "44f608ec7f3af586a9848337a37d847f",
".git/objects/58/1264229976c3475324e7c22fd46a1323e3e0a2": "61a1e149bcd5ca461629226bf90f65b2",
".git/objects/94/28e2175a389db11930f3df4961c28f97e0e5bb": "9ef8f1a1bce1e243366dd4a371fd2d5c",
".git/objects/9d/7dd08f01ea9dd69970fd522fbc4e178d739aca": "db0d2dca7f9b060ba96a3f4fdbae89f7",
".git/objects/a4/c8be6001c51d63a358aeb377c98636471bff48": "a9b5b586199c004f40c0697ea2be42e1",
".git/objects/a3/714e6bd3d0c49e4390e11ec35cf6e44ce91690": "c8069a1905d56f1a7768308902bfccf6",
".git/objects/bb/8307a898683e9a83683f82cd6f0ad8c28f48dc": "2262cb4fe1f228b8cdde1c3a69cc62ae",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/d7/e4d54c9e68ece1e202f741d4bbd890e4369fbb": "272185b41d3f7e9bac0119a17e55db6b",
".git/objects/b3/e8a89232b3503a297c697fe2e83ec01ff798da": "f1381b5a8567f376ed1dba8322c99240",
".git/objects/df/28d0f2717ce66c90a31503ca2d4cead1d80291": "b580fd07ae49ad51be2ea5d056ebdbee",
".git/objects/df/1bce7ebc479d00c1e614ce6547aa0ab543eb6d": "973522ba92ad2adae5bdf0c6022ac4e1",
".git/objects/da/776a9a5aeecf6c744cd883e6b61f8a5bdd061d": "f835eb25a7345e237823c86543a12083",
".git/objects/b4/d31efd0dc7868b26ff864de36491cce98ecc39": "cfb54c2843ed6e6a158935e32f2ca265",
".git/objects/a5/0efa2341dbdfae992cbe702f4ff8ed43fe601e": "c961a71f02b1fba8cae18be20eb992da",
".git/objects/bd/e92e3ad037a4d514d979cfd1d3a6e803901821": "b0f023d5a6300849d7dea6eb01a2a469",
".git/objects/bd/31f01785d114eca85f7b0ed4b56d39fb9be2c7": "08d21865c85ebca6e34cca3866fdad1a",
".git/objects/bd/784a4ae96398e078db6fefb4438bf7d3ff33ba": "df9de04fb765378a097c534a4c277914",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/cc14245f7fbc859f9eec69ad219d9f6a437fff": "bb304c9a144f84168716eb72907fd506",
".git/objects/ae/1eca47f5049c8a9ed8edd4a016c6eef9e6f7e3": "b7af328f7fb8d08670d73dade9caaf8b",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/e5/c0cf2461eebd57288f9b30ce07ac3d149a0dc6": "56fba3b9495ba56586abbf25c4bae1d5",
".git/objects/f3/e5e37e42245a80c72d970a624c5e2b5764d863": "c0c392284c6cf64eb3aeb244988e19d3",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/cdd7eb422cba5f4edf07e8cc22537b616811bf": "7c48a69ed86931cbc64bd608c7b02758",
".git/objects/c0/7a8dc5e39c15cacb6342c46c49c666f50363c2": "26dc3b5054abccfa9a38e9b9c34a7ea5",
".git/objects/f2/8fa857c0992329f836588bc9a0481215158298": "76db78218eac237a6fcc1eb7868e41c1",
".git/objects/c8/26b33098764b72a1d78d3cdd699955b479e0e6": "b1673fe76e5daa4e1460533342e72663",
".git/objects/c8/39b072d60ab43adf403717595e9e70045f3ed9": "02253b77437a858697a05fb85bf3cb63",
".git/objects/ec/37aafed2922d35ba0642b63f9201f8b436d090": "01d0e003b0f965956e05b8ebaeea7b73",
".git/objects/20/d87d117c31184ea7e3abbeb48bbc95a9f4424f": "c1dda5ef7e85559f8651cb33da3bce85",
".git/objects/11/549b0308efe419d30e0fdc86502a3e94463e5a": "7e0b7458638204a50e4f3dbcb7aaa08b",
".git/objects/16/1758b84677e16f4fe39b3c8c072c893bdb7f1c": "10bb7630af73fbd06a093176d4ecf4eb",
".git/objects/42/d0ceeb8000c4ecc2cf8085b706353423e15e8a": "ef8c8dcb72f26795ef5d24a1a255f4a1",
".git/objects/1f/24b8cecb28436b0a7376417b6f88a73ccc5228": "8c20ce044b6c86f8d0e5c410098e8d9f",
".git/objects/73/8b579fde917c8b5c736e6dbc24fe1d2a263ba8": "0a5b4e721c53cf87104ee3ba8fca16b4",
".git/objects/73/74312057e8a32b6563b0bf80252c12b4af1772": "d8236d768067647db97ef732087893c7",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/1b8a6b91238b07cb2b294f69e90d9ed0069afb": "a46889137131388896e0227fa4212a96",
".git/objects/26/aeafc2762285ad08bb376563fdff76499de20e": "685b77a528f90d974f6771598a64fdc0",
".git/objects/21/c7a3ccba8d84c5780e5a66de1f949272925ed7": "ad62059f8dbb9be9d7de142899b95e00",
".git/objects/4d/378a220cce1ef5aeebd3d146c85f288c22d555": "7df6dd3ff6738dfe862b5a404fd41cbd",
".git/objects/75/e7e31c04b40bb3ee5a5098e148381def177238": "38972528338d77ffe519ed34cf964312",
".git/objects/86/1a6c4060ba7861ca8c9b16b442fc9cbb682288": "b3e2f1ba8e305a28ee7b1ec687e334e7",
".git/objects/2a/05e8390adb3420b026d11f5ca6042c04623a82": "56a64cf95d30ca5417a236575e147035",
".git/objects/2f/823cfb164ec25fcb1fe7885ffb512ce25aa115": "3307dab416853f5990934f4db9d8f835",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/e7cef8f144af0ca012bb490aa1c1fd2adfed04": "f79160fc99df1a3da4fde17362ee11b6",
".git/objects/9a/261fbd20b5e03cdd8d7412720daf612d03d2dc": "aa36a836c6244d8f4abbbd2faeb78346",
".git/objects/5c/8daa8f85d49be6fd566a4b9b1189da0767e4fa": "28d20baef8573c46f34adb5aec3b761c",
".git/objects/31/bf993db0902343c41b16c98a7ba3a0f69ee96c": "caf1a11a5b613912a9eb71d18b1bb10c",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/96/f2a422b07f9f03327156821e2b7cce721d5d35": "8395b3d97d09040c38af6c57f5ed5ae8",
".git/objects/54/c0c779ab18ff1822aa3c8df238c870986739c7": "477e1ef93809e47eaebdc2cf086ecd1e",
".git/objects/53/8d725b62c69457d662cf096bc1375f9c1c022b": "ebbe38a61611198a9fc58321f5e4c652",
".git/objects/5b/c895f503a92965345895d296131062e831af53": "b64cef3783742917edac7f9188134a2b",
".git/objects/37/04c2ae6ae8166bea256e682dd6a5fa3954e047": "f2c5c32d99768e9b1a6155d1b9d79342",
".git/objects/01/3a0fa9e659460c283bc52d468774fc34dc2030": "4f83835c343cab411fe7bc5ad51b77c9",
".git/objects/55/a6d0897a343dee67b8bd1eb10585b60699d7d0": "f1e31270788beb00d8367f846ab6d37d",
".git/objects/97/4565c04a2d69cbbd50f6ceec72c4e3b3ede7b0": "1714055cdef4b732dcb596693e913e7b",
".git/objects/0a/46fc94849b53ce55fefd49c9a540c065246fde": "1bdaab2423b02a3ac6d3e40cb5f97197",
".git/objects/64/a6649fdd214d98e011f7531fc714a973420c7a": "b77b1bd877b312e6ba9ba7bb8d65f747",
".git/objects/90/db9cd98b761b2356ada7f2cc0a5b28b7fbf630": "a19f232fa1defa6825f17688d1aa9e48",
".git/objects/bf/a9ddc1dc461d29f42d73f7bfb1cb41b5240fa7": "f79602ee7860aad7dc82f481e0515d60",
".git/objects/bf/225b8d01e312168ff3504247b4b78f2acfdebc": "caaaf2c4d6b92ed625f9846ce9acc265",
".git/objects/bf/93b2ca99b6b3110f1e6b82586ba066ec60b799": "283c537ee8f9ee4548bed9e475ff3f1c",
".git/objects/d3/508316fd84e9ae199681138938c5ebccfe4736": "855f6fe53cbce12997cc5ef4e739456c",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/c1b73632b2018a6f2d3ce306c26ce9925c77f9": "f23d54c85b0bb77fbf7b5e95eb9029b7",
".git/objects/a7/eefe976a018dbfcdbe63009ea697e662a95799": "76efff5823442ac33d1a2faf5163c9e5",
".git/objects/b8/26ecfbb298aa7b92837ecc38354589014af255": "0e1e9e42588f994cf2a066cf98a1bd14",
".git/objects/dc/87a071a007bd593c1934c5aea1a06de856120d": "da1467700a883f451d11c4a3d83b35db",
".git/objects/b6/324b85b9dc59e314d3098b2230de6e8f32e308": "afc7aa2d15d028b74e18ee5c070148d7",
".git/objects/d5/a42626b17e68d3b7ee6c4aca4030bc067d8712": "e9111dc3322cefb74ab304f6a684a577",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/8efc2715d07fa5f035d186f3717eff1aaee433": "a2302f16dac9098e61f8dda718f40b7e",
".git/objects/b0/6e9b3521ad0c947cad12cc955be7565d4993ea": "4d3a90c204dadc65dc4cac8edcb0c0c6",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ef/d6d4ed51c4d8a983563f0f9dc6c7063413fbb5": "294c743ac06f93a0aab02f86eda44107",
".git/objects/ef/f24e421d1ae37ba5473e86e2198aecf12fea8e": "5437f2c67e2a00e1e67fb449f5b23fc6",
".git/objects/ef/3b7200d7f500dcee8989de41716ff62ac58dd7": "cfc43efedcc5bee775c2766f4770c23f",
".git/objects/e8/cb561d3826cde7a10a0824235f787fea0c923b": "b0ebfe8b594cdccda5494f9b4dbdc4df",
".git/objects/c2/9dbf885a12464e8fbfc7ac3c3b9ba511142306": "c104b162c355bfb8926bebca754e4290",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/e0/87ef3b7b9b68cd7d5c808c1d1ccfcb78babe63": "34447544a32bf5220e8bc1752df69920",
".git/objects/79/4692ba84dd7b5941cbb39efaea489929f65895": "41f54637a16233039e03e3ef90926b5f",
".git/objects/79/01e32cdd6c6a7eab4fc9ca62e45fef5d31b3b8": "ed1489a98e0bea83f39099e07e1e5e80",
".git/objects/2d/ff83334f60d16055d535ad0306d660ab75b45e": "481460bc6b8f2158460175e4a1ee953f",
".git/objects/41/64ccfcafa8bdfd8f0bcad696bca3e4159aa56a": "9a9b74734c1e13047d8e431da7528be1",
".git/objects/48/c30b1d3c58ee734257d029948d45e5f54bf5fb": "ac61349c8d43501206e363ad6d2d802b",
".git/objects/1e/b2df390addca67d76f52ebc9dbd6449e75166f": "4a411b76cfd532f8362cd27f6400c79a",
".git/objects/4a/80c056b9869fd008d436e365640a8fa5c7ad80": "f7f60f04b49b5d62796be1d4cfcd6bcc",
".git/objects/4f/c90aaff838bfb95d995c317b2473a240fa5661": "922a2f5abb5e65ed9f7851fe9afe2ba6",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1d/3bb8462765d6add25a4d6c4e1b1fe453cfbdaf": "431ce4d48d93f7c241298d714c98c301",
".git/objects/49/45ce0739d5c858c7deecb77e8e30e45f3b774b": "1c4a5e12ff78148002bf7b1bd5632bd2",
".git/objects/40/2e1afb86f28a38395535d2d1295ac117c280e5": "16f388c2c4e92010a4f8dfe4b9fcd834",
".git/objects/2b/7cb88d490afb9fa73a7e3922805c1ea673ca84": "f1fc6b6e09a3a66d6ab2ed13c148df71",
".git/objects/2b/d40f8da95dfec1438a4f3eb992e22cfb2a30c4": "511b927d8152d7e869132360985cc628",
".git/objects/13/5ee59e9b20dad2be05a07c9964edcd76239bbf": "f223e3ec5dbd078f6cfc6360ace77c5b",
".git/objects/7f/4710cbc09a0859580a5a7bcd78f2f239f2ef58": "814a9ccdf20b9ada232d133128d1477a",
".git/objects/7a/47d3be1d32af90a0417976aa1600756134a00a": "b0d95608173bc920b1538c7465f386f1",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/8e/89ae39498f24ccd4dd68259edf6e99442b2dd9": "93dc8ad1b3f6e83ea110e55e10d3093c",
".git/objects/25/355f470027dfb19f1c5a92c67d4faae956f5bb": "b5cdc03ce1c0218cd7ee3d4eb7ae5367",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3522d2d55652e9798902931ff8e2a094",
".git/logs/refs/heads/main": "1b094e98b1fe3ed10cd4964887243d68",
".git/logs/refs/remotes/origin/main": "e80acff2b9f4ee523ecb9251abb0cd99",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "cd46002b0fc55f2048c1d9cd3a28ac56",
".git/refs/remotes/origin/main": "cd46002b0fc55f2048c1d9cd3a28ac56",
".git/index": "1ad5b0df61a6262f3939401978fb901e",
".git/COMMIT_EDITMSG": "345610d1c2edbf921f437e5527a833ed",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
"assets/AssetManifest.json": "66ed1d38b5b217a76dd58783ed6a5ca0",
"assets/NOTICES": "88be5973d7fcaf21fc52691178474d9b",
"assets/FontManifest.json": "064e40316803472112ca99267e37b556",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "57cd6cbec4f768313790f490d1a383de",
"assets/fonts/MaterialIcons-Regular.otf": "62ec8220af1fb03e1c20cfa38781e17e",
"assets/assets/images/8.jpg": "bf5b9ec2a2145bd3c9db8d007c55e3a4",
"assets/assets/images/9.jpg": "dc3353930698d835afa11089fac94220",
"assets/assets/images/divider.png": "bef37b4625a5917bdef13ac31a4afe2a",
"assets/assets/images/intro_flower.png": "7062a96226e487d52a806ce685672c44",
"assets/assets/images/12.jpg": "af684cd875863b1c8b2af4b52d93a578",
"assets/assets/images/gallery_flower.png": "423c12222d41960e3f52fb171cce183e",
"assets/assets/images/11.jpg": "d6ff2f520d70fa4fbe03ad4441611833",
"assets/assets/images/10.jpg": "dd36d354476ba53e54ffef6c192de689",
"assets/assets/images/4.jpg": "057607b0141cac59eabcd874ec75e211",
"assets/assets/images/5.jpg": "1eee3b118ec146d06ecb40bfab97fa9a",
"assets/assets/images/7.jpg": "8fc51d4465b41cac506ad866947b1a98",
"assets/assets/images/6.jpg": "952e5a52c64b673ab7d8ab74adb15039",
"assets/assets/images/2.jpg": "195f52ca436f1e5f9f62132f3a7932c3",
"assets/assets/images/3.jpg": "e6f6b8765efeebad5d6692bc638339ae",
"assets/assets/images/1.jpg": "a8e97352aa1fb6723e76e4e8d0cf1852",
"assets/assets/fonts/Eulyoo1945-Regular.ttf": "4d7e70024953b25dfd6f2d802b565451",
"assets/assets/fonts/Eulyoo1945-SemiBold.ttf": "6eb7b7014fa12610d070261219bed157",
"canvaskit/skwasm.js": "11a044d7e1b6b06f621227aa0636df04",
"canvaskit/skwasm.wasm": "ad8e22d2ba7e6b1102d86b71d9ff886e",
"canvaskit/chromium/canvaskit.js": "945860162d0f411557ebceae7ffd4e6e",
"canvaskit/chromium/canvaskit.wasm": "6f06a12926a30007351ad403829a1524",
"canvaskit/canvaskit.js": "8a27c70cfc3542d6232ff272f8eef5c4",
"canvaskit/canvaskit.wasm": "0ffe126596e45daf10ff07d058c08074",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
