'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "93ac11bd1ce63d0041ce06684c6a0afa",
"index.html": "7bcb6f8039292baea11121c6bc1e20b3",
"/": "7bcb6f8039292baea11121c6bc1e20b3",
"main.dart.js": "07899d04a6c6bb4108eafda17d43d805",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "3efa812a0c29d93b5928a89e70466793",
".git/config": "d212df4688cd9c2d0beca6a07c0f64a1",
".git/objects/0d/54dd50c16433650b2fd726c0f87067753400b7": "49aadb0a44426beff90e39a377571f16",
".git/objects/0c/054d8f74a1b226eba150636e3b1ba76259ffcc": "4841b2feb71b37074ac77676a3f25a04",
".git/objects/0c/99835ea316446cc458befa33c4055387af83b6": "9c51353d1e3848a98da46ef0e6d2dd5c",
".git/objects/0c/d06c464b2a7e596018125a3689777c02e96380": "fce66c7681cd7a0559e2467a6957a338",
".git/objects/68/f89cbfd3440c46c9917b26a4f05891215c6e1b": "001def9ae77fdb7980d92589b4c60958",
".git/objects/03/bcb431e982ad4567c3e1507c8b5f3f00ef8ab4": "0912449a2494853701fc87b890684424",
".git/objects/03/d6b91e509f4720b3146fbb3e3e50f69975061e": "e2f43559b7f94dcb0ec16ac3d6b95c44",
".git/objects/03/2a010bc3f04c864c4e9b97e91a36720c4be795": "de941771d113cddd705c0449eb476fee",
".git/objects/9b/a0c2a4912d8c4a72f38131fb5e107bc2add063": "57bc253d2b226a9714777a6ba615c022",
".git/objects/04/0b0a184c10a3f41ca04394bbf549678830d17a": "6f9d2a40b2e571669910c1b8dc76258e",
".git/objects/04/c2c2bafbdac381411371b14870878917851651": "d312b983dce6111d01a5ecbf99b317cb",
".git/objects/04/944ee1aaef7573b7a1ce6d242d001e217ba92f": "8ee27049a746abb7b413698cd62db3f3",
".git/objects/6a/5cc319ba2532f6caa1fd5f3bdacea681727c07": "926f362c3a4533e25206415282cd7c1e",
".git/objects/32/66c9d412a20a15f9ad3d4a200188f6538e6b4b": "b5d26f514071a32dae31350f479fce94",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/51/c5e143ac2da3de418d6953694b157764b174b9": "44f608ec7f3af586a9848337a37d847f",
".git/objects/58/1264229976c3475324e7c22fd46a1323e3e0a2": "61a1e149bcd5ca461629226bf90f65b2",
".git/objects/94/28e2175a389db11930f3df4961c28f97e0e5bb": "9ef8f1a1bce1e243366dd4a371fd2d5c",
".git/objects/05/ce87897732b4d4c15f8801af73259da4fce824": "bccbd178c324693a9c6506ce75405788",
".git/objects/9d/f735f11cc3a3e77da5ec3e6ddb2860494c319b": "1acf1985296b43407ef35bbeee5cb917",
".git/objects/9d/7dd08f01ea9dd69970fd522fbc4e178d739aca": "db0d2dca7f9b060ba96a3f4fdbae89f7",
".git/objects/a4/c8be6001c51d63a358aeb377c98636471bff48": "a9b5b586199c004f40c0697ea2be42e1",
".git/objects/a3/714e6bd3d0c49e4390e11ec35cf6e44ce91690": "c8069a1905d56f1a7768308902bfccf6",
".git/objects/b5/45dec31138e91a395389651708708da689ec52": "28c1d76ea5ba83533caad28a1450953e",
".git/objects/bb/8307a898683e9a83683f82cd6f0ad8c28f48dc": "2262cb4fe1f228b8cdde1c3a69cc62ae",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/d7/e4d54c9e68ece1e202f741d4bbd890e4369fbb": "272185b41d3f7e9bac0119a17e55db6b",
".git/objects/b3/e8a89232b3503a297c697fe2e83ec01ff798da": "f1381b5a8567f376ed1dba8322c99240",
".git/objects/b3/123aca0e4169f51fc8de2909599823acd443db": "548a09c164d4f7b1f208ee22ae35c52f",
".git/objects/df/28d0f2717ce66c90a31503ca2d4cead1d80291": "b580fd07ae49ad51be2ea5d056ebdbee",
".git/objects/df/1bce7ebc479d00c1e614ce6547aa0ab543eb6d": "973522ba92ad2adae5bdf0c6022ac4e1",
".git/objects/da/776a9a5aeecf6c744cd883e6b61f8a5bdd061d": "f835eb25a7345e237823c86543a12083",
".git/objects/b4/d31efd0dc7868b26ff864de36491cce98ecc39": "cfb54c2843ed6e6a158935e32f2ca265",
".git/objects/a2/6368ff3a4ec03d02cb931f1f27723e7e136cc4": "62ac5920a24144ff91480f2b7c2236ad",
".git/objects/a5/0efa2341dbdfae992cbe702f4ff8ed43fe601e": "c961a71f02b1fba8cae18be20eb992da",
".git/objects/a5/961e2a32b7ddbb009d12c27521faf713e39b51": "22157a55f068a43091886124ad801897",
".git/objects/bd/e92e3ad037a4d514d979cfd1d3a6e803901821": "b0f023d5a6300849d7dea6eb01a2a469",
".git/objects/bd/31f01785d114eca85f7b0ed4b56d39fb9be2c7": "08d21865c85ebca6e34cca3866fdad1a",
".git/objects/bd/784a4ae96398e078db6fefb4438bf7d3ff33ba": "df9de04fb765378a097c534a4c277914",
".git/objects/d6/62245a928cc206fbf8ad800946d86eb332b7fc": "9f37691b8bb41124e3a421e0445972bd",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/270f74ad9712d8b17293b535fe4738ad453d2d": "5b4709c8f3cb20e87b715bf6b3e78ec7",
".git/objects/ae/cc14245f7fbc859f9eec69ad219d9f6a437fff": "bb304c9a144f84168716eb72907fd506",
".git/objects/ae/1eca47f5049c8a9ed8edd4a016c6eef9e6f7e3": "b7af328f7fb8d08670d73dade9caaf8b",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/e5/49d68d7e221fce68501544b06934d1eb5e97fb": "32b2b65393807229c38f67d939f96739",
".git/objects/e5/c0cf2461eebd57288f9b30ce07ac3d149a0dc6": "56fba3b9495ba56586abbf25c4bae1d5",
".git/objects/f3/e5e37e42245a80c72d970a624c5e2b5764d863": "c0c392284c6cf64eb3aeb244988e19d3",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/cdd7eb422cba5f4edf07e8cc22537b616811bf": "7c48a69ed86931cbc64bd608c7b02758",
".git/objects/c7/0c964d272e3274a706856d76bcad42fcddcc4b": "d3c0a567dc19260e3ee1307bfe0912b2",
".git/objects/c0/7a8dc5e39c15cacb6342c46c49c666f50363c2": "26dc3b5054abccfa9a38e9b9c34a7ea5",
".git/objects/f2/8fa857c0992329f836588bc9a0481215158298": "76db78218eac237a6fcc1eb7868e41c1",
".git/objects/f5/01cf9f7ea98038d6fab1805ed9be8a58a5cc5f": "5e4dcc07d3c55c139bbe70238dfda71c",
".git/objects/f5/23fc7218df29b66d7bfc77a9e16f04db230993": "257d29e319408bc19712ea57a1aba59a",
".git/objects/e3/238aebd5a8711af6575e60f86d8f6e5a6abb54": "61ce44169edf2479c29b05ce2a165dd4",
".git/objects/ca/3605a191f7d374360cc2a6ac4c0e11125a93d2": "1dc2279c639232c19d44e8a09c1d9474",
".git/objects/fe/932a7cc3529b915884da2e733274f573597b0d": "645c8be79e4a5f738b6fab1b068021fa",
".git/objects/c8/26b33098764b72a1d78d3cdd699955b479e0e6": "b1673fe76e5daa4e1460533342e72663",
".git/objects/c8/39b072d60ab43adf403717595e9e70045f3ed9": "02253b77437a858697a05fb85bf3cb63",
".git/objects/ed/2e43fdd2120cc6a7c14b76d1929efe1718b738": "2c9830078833e8d5cbb1deb3eb65c065",
".git/objects/c6/d9e8b65f1cf489198342c5199ea9851b242f5e": "c29afdbc797138ec1e4500f62c903db5",
".git/objects/ec/37aafed2922d35ba0642b63f9201f8b436d090": "01d0e003b0f965956e05b8ebaeea7b73",
".git/objects/4e/059fe0798f281b6ba348036d1d77955bf94621": "049ade0f1a781e93ad76f1cbae6e4d2d",
".git/objects/4e/d696f65396a275b0e93501bdffd67581185aa2": "97c520fb445df07d015e6ac2469a101f",
".git/objects/20/d87d117c31184ea7e3abbeb48bbc95a9f4424f": "c1dda5ef7e85559f8651cb33da3bce85",
".git/objects/11/549b0308efe419d30e0fdc86502a3e94463e5a": "7e0b7458638204a50e4f3dbcb7aaa08b",
".git/objects/29/ba25de5ca9872ef4c4496d49423bef6d2eadf1": "dfca649a40300e12d79268e7fc34515e",
".git/objects/16/1758b84677e16f4fe39b3c8c072c893bdb7f1c": "10bb7630af73fbd06a093176d4ecf4eb",
".git/objects/16/46762c0e2abd09ac014dc012bdfedf9ead83c8": "601a96af585e8dc931abbfdb44a54341",
".git/objects/42/d0ceeb8000c4ecc2cf8085b706353423e15e8a": "ef8c8dcb72f26795ef5d24a1a255f4a1",
".git/objects/1f/24b8cecb28436b0a7376417b6f88a73ccc5228": "8c20ce044b6c86f8d0e5c410098e8d9f",
".git/objects/73/8b579fde917c8b5c736e6dbc24fe1d2a263ba8": "0a5b4e721c53cf87104ee3ba8fca16b4",
".git/objects/73/74312057e8a32b6563b0bf80252c12b4af1772": "d8236d768067647db97ef732087893c7",
".git/objects/1a/32543e8b0d3ba9dc65fdffafd555c4f8b0475e": "377cf6290c63a6658f29fcfbe3ccd57a",
".git/objects/8a/50027a4b210236997b372a279354e20ba0faf3": "eaa4d982e82c323ff230f4b9a41cb741",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/1b8a6b91238b07cb2b294f69e90d9ed0069afb": "a46889137131388896e0227fa4212a96",
".git/objects/7e/58e57a4938fd465e45c2ae44f8be14be96f2f4": "4dbc2bd6c86e7a34743ddfef4d545586",
".git/objects/7e/7a5e961754ce9ba2c9348de2555068c3b4c56c": "666863c59e5d5c3471f219f347137327",
".git/objects/4c/0146eb371c5bb5a6c6c3f06898cdb36b3284f0": "fd390cc90d862960261d3cbe2fb72b6b",
".git/objects/4c/98c322e06096d18ee9e3ec9641ea81fba7223a": "5b45f1c3fbe13a08a6057d064488d78d",
".git/objects/26/aeafc2762285ad08bb376563fdff76499de20e": "685b77a528f90d974f6771598a64fdc0",
".git/objects/21/c7a3ccba8d84c5780e5a66de1f949272925ed7": "ad62059f8dbb9be9d7de142899b95e00",
".git/objects/4d/378a220cce1ef5aeebd3d146c85f288c22d555": "7df6dd3ff6738dfe862b5a404fd41cbd",
".git/objects/75/e7e31c04b40bb3ee5a5098e148381def177238": "38972528338d77ffe519ed34cf964312",
".git/objects/81/6950a2ffa20e01bdf78048382e8907a64c9433": "6076b296222c3c5346217ee1e8de822f",
".git/objects/86/1a6c4060ba7861ca8c9b16b442fc9cbb682288": "b3e2f1ba8e305a28ee7b1ec687e334e7",
".git/objects/2a/05e8390adb3420b026d11f5ca6042c04623a82": "56a64cf95d30ca5417a236575e147035",
".git/objects/2f/823cfb164ec25fcb1fe7885ffb512ce25aa115": "3307dab416853f5990934f4db9d8f835",
".git/objects/43/128bb3f8511ad3c175a9af56a8b4337adecf7c": "35a416d3571c15a1869201a147371406",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/e7cef8f144af0ca012bb490aa1c1fd2adfed04": "f79160fc99df1a3da4fde17362ee11b6",
".git/objects/07/d68d647d3025378d7c766bc962926faec9a638": "7eafcb2d65bcaa85638cfcbd83585950",
".git/objects/6e/772f76e6ac6c7d113b77895926c8886a24dcdf": "98a226d2c3788859949537cf8298aa63",
".git/objects/9a/261fbd20b5e03cdd8d7412720daf612d03d2dc": "aa36a836c6244d8f4abbbd2faeb78346",
".git/objects/9a/22ef86ba4bb1d138f073a9abb1a0f90783cf08": "ca3c65395eb7f8efa86b64284d9f0e13",
".git/objects/9a/74c9dfa3be1da30c0613ce824310f14bbfee6b": "18015996663ae7c26ca83ffa59f4ea2c",
".git/objects/36/93eeaa2f72c3dd69b86a1f25c92559dcb0136a": "d2a91892356b7e86bd9c775c840f4d13",
".git/objects/5c/8daa8f85d49be6fd566a4b9b1189da0767e4fa": "28d20baef8573c46f34adb5aec3b761c",
".git/objects/5c/c640b7b09d90d90d804912fe830ccb573ef1cd": "9e0ab9af9c32682f0e32260f1fcf7e1b",
".git/objects/31/bf993db0902343c41b16c98a7ba3a0f69ee96c": "caf1a11a5b613912a9eb71d18b1bb10c",
".git/objects/91/1dcda3eaa182ff0ea5501dbf38293d3ebdd7e3": "72727321f3889b0d0ade3e89f31764c5",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/96/f2a422b07f9f03327156821e2b7cce721d5d35": "8395b3d97d09040c38af6c57f5ed5ae8",
".git/objects/54/c0c779ab18ff1822aa3c8df238c870986739c7": "477e1ef93809e47eaebdc2cf086ecd1e",
".git/objects/53/8d725b62c69457d662cf096bc1375f9c1c022b": "ebbe38a61611198a9fc58321f5e4c652",
".git/objects/3f/d5fcd086b073aa624ac444a962e815c3e99ed0": "061b22e7e274ee096c7a365037a53f0b",
".git/objects/3f/7dec1d392857828abb3760b86ab73b78fc2d63": "9d4f064665b7cca42213ae37bd9ee28d",
".git/objects/5e/e7a9da819d71ee7d547c9be26e216f75dc8bb1": "1617a400a8003bdac50066cba5985a41",
".git/objects/5b/c895f503a92965345895d296131062e831af53": "b64cef3783742917edac7f9188134a2b",
".git/objects/37/04c2ae6ae8166bea256e682dd6a5fa3954e047": "f2c5c32d99768e9b1a6155d1b9d79342",
".git/objects/01/3a0fa9e659460c283bc52d468774fc34dc2030": "4f83835c343cab411fe7bc5ad51b77c9",
".git/objects/99/a6d1dbd2f01a71e642536409f2dfe86790ae24": "349779b2c18cd381ed00e122abe87d6d",
".git/objects/55/a6d0897a343dee67b8bd1eb10585b60699d7d0": "f1e31270788beb00d8367f846ab6d37d",
".git/objects/55/da76961f6785779c59a0c7c36cff281ca11f10": "7aa64083ca8393d4d6e5941e245baf1e",
".git/objects/97/4565c04a2d69cbbd50f6ceec72c4e3b3ede7b0": "1714055cdef4b732dcb596693e913e7b",
".git/objects/0a/46fc94849b53ce55fefd49c9a540c065246fde": "1bdaab2423b02a3ac6d3e40cb5f97197",
".git/objects/64/a6649fdd214d98e011f7531fc714a973420c7a": "b77b1bd877b312e6ba9ba7bb8d65f747",
".git/objects/90/fa51510baef65f67ffe5d482bfeecaf22ad0fa": "5df17d556057dc1fde400d6c01f41fa3",
".git/objects/90/db9cd98b761b2356ada7f2cc0a5b28b7fbf630": "a19f232fa1defa6825f17688d1aa9e48",
".git/objects/bf/a9ddc1dc461d29f42d73f7bfb1cb41b5240fa7": "f79602ee7860aad7dc82f481e0515d60",
".git/objects/bf/225b8d01e312168ff3504247b4b78f2acfdebc": "caaaf2c4d6b92ed625f9846ce9acc265",
".git/objects/bf/93b2ca99b6b3110f1e6b82586ba066ec60b799": "283c537ee8f9ee4548bed9e475ff3f1c",
".git/objects/d3/508316fd84e9ae199681138938c5ebccfe4736": "855f6fe53cbce12997cc5ef4e739456c",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/c1b73632b2018a6f2d3ce306c26ce9925c77f9": "f23d54c85b0bb77fbf7b5e95eb9029b7",
".git/objects/a7/eefe976a018dbfcdbe63009ea697e662a95799": "76efff5823442ac33d1a2faf5163c9e5",
".git/objects/b8/c5cb9d0c3a79f911d1e4dbc49ff7f36fd82897": "7180ce3dee539cfff98052f6e1839a5d",
".git/objects/b8/26ecfbb298aa7b92837ecc38354589014af255": "0e1e9e42588f994cf2a066cf98a1bd14",
".git/objects/dc/87a071a007bd593c1934c5aea1a06de856120d": "da1467700a883f451d11c4a3d83b35db",
".git/objects/b6/324b85b9dc59e314d3098b2230de6e8f32e308": "afc7aa2d15d028b74e18ee5c070148d7",
".git/objects/a9/b7f28a0986b9b2bc3d2028c4f964be1b58130f": "6b47a1280c004dbbed7d14b131dbecd7",
".git/objects/d5/a42626b17e68d3b7ee6c4aca4030bc067d8712": "e9111dc3322cefb74ab304f6a684a577",
".git/objects/d2/c0950a337b86360be64a2ae3ec58ad69f9786a": "b57066ea7042a3024ccc9731f6d56d80",
".git/objects/aa/faada3e5874480e65cc623ba7c42ebc1b92b5a": "c3dbe6b9d10618b747d36af25594b46f",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/3db6fef89d6769ad8183a8b87ddfa26eba9699": "30307362d41719d671a4b18c8f94315f",
".git/objects/de/8efc2715d07fa5f035d186f3717eff1aaee433": "a2302f16dac9098e61f8dda718f40b7e",
".git/objects/b0/6e9b3521ad0c947cad12cc955be7565d4993ea": "4d3a90c204dadc65dc4cac8edcb0c0c6",
".git/objects/b0/022e0d608cd8f006c1d348050d84bbaf8e8097": "5d6a6e15434377c21c3488292b904b74",
".git/objects/b0/b30423c482ad987a2ad8c75ddc0a34c8a78cbb": "9cb3a98a54ee0410519de897ca57afe1",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/609d106194efeea7c15e2583f91ddc69f63234": "cf978255dd8c69e73e9b0f1fbd768fda",
".git/objects/ef/d6d4ed51c4d8a983563f0f9dc6c7063413fbb5": "294c743ac06f93a0aab02f86eda44107",
".git/objects/ef/f24e421d1ae37ba5473e86e2198aecf12fea8e": "5437f2c67e2a00e1e67fb449f5b23fc6",
".git/objects/ef/3b7200d7f500dcee8989de41716ff62ac58dd7": "cfc43efedcc5bee775c2766f4770c23f",
".git/objects/ea/82961b0e27545685bc11e5d6f360fe8d45572c": "526ce6ad1217b2e57a027ae39f366a74",
".git/objects/e1/616d01f523e65ca5a44c43dfb2505c69688a32": "7611b71fa245c760046a5a5352ca6384",
".git/objects/e1/11a62f6a4317838a3f94a29c88ea269cf93b15": "45094e17dc1fb5d4d7e245b02f5e6702",
".git/objects/cc/f3738209e79fbd7ee7c4d6d279b3189d96dbae": "1c917d4f892af94a183a29f43fbd1217",
".git/objects/e6/692afdff02f9d7542bd4b4a00f6e3df88e0b87": "d77657b60bf5a774933b4fe513cb519a",
".git/objects/e8/c7df68a6cb6dfe75ab4412c380817fcd91305e": "2a7c7d8e01ff8011cf1482d7cdfa44c3",
".git/objects/e8/cb561d3826cde7a10a0824235f787fea0c923b": "b0ebfe8b594cdccda5494f9b4dbdc4df",
".git/objects/c2/9dbf885a12464e8fbfc7ac3c3b9ba511142306": "c104b162c355bfb8926bebca754e4290",
".git/objects/e7/3375c358594d8909f9a40debd615f1eb2a26cc": "6b77d00a00ab018ebaa57635d4fb7106",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/cb/3e69e7c36640fbdf9fc27ede191ddc67116f68": "17067381295883826ade033394a112fc",
".git/objects/e0/87ef3b7b9b68cd7d5c808c1d1ccfcb78babe63": "34447544a32bf5220e8bc1752df69920",
".git/objects/79/4692ba84dd7b5941cbb39efaea489929f65895": "41f54637a16233039e03e3ef90926b5f",
".git/objects/79/01e32cdd6c6a7eab4fc9ca62e45fef5d31b3b8": "ed1489a98e0bea83f39099e07e1e5e80",
".git/objects/2d/ff83334f60d16055d535ad0306d660ab75b45e": "481460bc6b8f2158460175e4a1ee953f",
".git/objects/41/98cb32a5ed42e9171940feb41c9e6d92c49804": "c22f304da697f5321eab61f523245a24",
".git/objects/41/64ccfcafa8bdfd8f0bcad696bca3e4159aa56a": "9a9b74734c1e13047d8e431da7528be1",
".git/objects/48/c30b1d3c58ee734257d029948d45e5f54bf5fb": "ac61349c8d43501206e363ad6d2d802b",
".git/objects/1e/b2df390addca67d76f52ebc9dbd6449e75166f": "4a411b76cfd532f8362cd27f6400c79a",
".git/objects/4a/80c056b9869fd008d436e365640a8fa5c7ad80": "f7f60f04b49b5d62796be1d4cfcd6bcc",
".git/objects/4a/5c7f439cff98abc788e45a357b411feb3901ff": "5d5896d59b8025ccaa1712d7a034f1a3",
".git/objects/24/0d94887d77471dd43370cd45e840d49f8dbb65": "a27ef357e2d5f2c01a5107aeb045e529",
".git/objects/23/d7898914718020ff31f6424dc9d3446037fe7a": "5c104de65c102801023ef3f782ae15cd",
".git/objects/4f/c90aaff838bfb95d995c317b2473a240fa5661": "922a2f5abb5e65ed9f7851fe9afe2ba6",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1d/3bb8462765d6add25a4d6c4e1b1fe453cfbdaf": "431ce4d48d93f7c241298d714c98c301",
".git/objects/76/1ef1ea36e2cdd412f9a65dd31e28768839611b": "2740fe5fa150ea2e3092b222fae5ed04",
".git/objects/49/7c4a2a2d38d8ba08c19706627f896a049b8451": "26d72e31d8e39b8b327a174f64f6c3fb",
".git/objects/49/45ce0739d5c858c7deecb77e8e30e45f3b774b": "1c4a5e12ff78148002bf7b1bd5632bd2",
".git/objects/40/2e1afb86f28a38395535d2d1295ac117c280e5": "16f388c2c4e92010a4f8dfe4b9fcd834",
".git/objects/2b/7cb88d490afb9fa73a7e3922805c1ea673ca84": "f1fc6b6e09a3a66d6ab2ed13c148df71",
".git/objects/2b/d40f8da95dfec1438a4f3eb992e22cfb2a30c4": "511b927d8152d7e869132360985cc628",
".git/objects/78/2557da86d2aa6406f969d238c0799c175ef1a5": "297930dd754323e9dc0797d691ee547d",
".git/objects/13/5ee59e9b20dad2be05a07c9964edcd76239bbf": "f223e3ec5dbd078f6cfc6360ace77c5b",
".git/objects/7f/4710cbc09a0859580a5a7bcd78f2f239f2ef58": "814a9ccdf20b9ada232d133128d1477a",
".git/objects/7a/47d3be1d32af90a0417976aa1600756134a00a": "b0d95608173bc920b1538c7465f386f1",
".git/objects/7a/bd8267443a2b402ac14d5d833a3e87a0109440": "9261d3ab584df10f8e5d475feb400986",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/8e/89ae39498f24ccd4dd68259edf6e99442b2dd9": "93dc8ad1b3f6e83ea110e55e10d3093c",
".git/objects/25/355f470027dfb19f1c5a92c67d4faae956f5bb": "b5cdc03ce1c0218cd7ee3d4eb7ae5367",
".git/objects/25/07662bdd491dc88e76e82b8ae68669cb428b60": "a4fd609c4c449ead9fd5a5ae433c7462",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "149888f1c7ada51afe15dbc8eef826ab",
".git/logs/refs/heads/main": "de318dd04ad360fa7a50895a89929572",
".git/logs/refs/remotes/origin/main": "83743709270ed8e51896aaf408ddfdaa",
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
".git/refs/heads/main": "13ff61bd96395a1cee229a41771e1056",
".git/refs/remotes/origin/main": "13ff61bd96395a1cee229a41771e1056",
".git/index": "ab3186c02eab179895a58b56517fd4fb",
".git/COMMIT_EDITMSG": "c94020a69b8f09af6273f8e6b20bfbd5",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
"assets/AssetManifest.json": "6c445e0003b425b65d834ece761ed435",
"assets/NOTICES": "88be5973d7fcaf21fc52691178474d9b",
"assets/FontManifest.json": "064e40316803472112ca99267e37b556",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "54c5ae49915a170afbc261ffbb11095a",
"assets/fonts/MaterialIcons-Regular.otf": "62ec8220af1fb03e1c20cfa38781e17e",
"assets/assets/images/8.jpg": "1e3ff03e2e45d3e5857d16aeadf0d62d",
"assets/assets/images/main.jpg": "0ee60b90e15fdeff7290ce13a08b8c6a",
"assets/assets/images/9.jpg": "06cd78c067e3852af18a3a67114103e2",
"assets/assets/images/14.jpg": "cda0dc8ebf5e59a082bf03186e649053",
"assets/assets/images/divider.png": "bef37b4625a5917bdef13ac31a4afe2a",
"assets/assets/images/15.jpg": "428468ef5c3939d1263baa1cdb54f89c",
"assets/assets/images/17.jpg": "2ea0f2884769e6a1c07ecc078263adf6",
"assets/assets/images/intro_flower.png": "538b76ec213c3b3d1cb5bb0ead1b4365",
"assets/assets/images/16.jpg": "79f27ecd1882d0c934983bb114b2d205",
"assets/assets/images/12.jpg": "9d7c4e98e9931b690a6147958b53990b",
"assets/assets/images/gallery_flower.png": "423c12222d41960e3f52fb171cce183e",
"assets/assets/images/13.jpg": "ff5f7d373898666a90eeee2ec7be63ff",
"assets/assets/images/11.jpg": "996cd1a80c7c9391f11217e7f74101cc",
"assets/assets/images/10.jpg": "3250eb2b0a4894c3e4faa553a36107cc",
"assets/assets/images/20.jpg": "bb7f0de158429fe7d14aa12d5c1b2dd1",
"assets/assets/images/22.jpg": "dec5914bf957dfdc208555b72a89f737",
"assets/assets/images/18.jpg": "ceb241ea71a6c453cddc3d8e5f9a4370",
"assets/assets/images/19.jpg": "d6ff2f520d70fa4fbe03ad4441611833",
"assets/assets/images/4.jpg": "913abf92a8a338aed2685cbfa7952dc9",
"assets/assets/images/5.jpg": "315e0d996cc486fe5f401687bbd7b02d",
"assets/assets/images/7.jpg": "8b61fe5e015c6103ae4a2221af0a699e",
"assets/assets/images/6.jpg": "11af53adfd683ec4edd1a1cb38ee5f01",
"assets/assets/images/2.jpg": "195f52ca436f1e5f9f62132f3a7932c3",
"assets/assets/images/3.jpg": "8471fbe2b2c14fc859d268aa5ef80d47",
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
