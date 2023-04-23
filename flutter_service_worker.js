'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "93ac11bd1ce63d0041ce06684c6a0afa",
"index.html": "2514b0ac33bc02e0d513e1909a170271",
"/": "2514b0ac33bc02e0d513e1909a170271",
"main.dart.js": "8a483109f1838501069dd544a669768d",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "3efa812a0c29d93b5928a89e70466793",
".git/config": "d212df4688cd9c2d0beca6a07c0f64a1",
".git/objects/61/5f743153b6957de77671fb7deb17e264ac1528": "4f29e6e8bbc51c8a7cd0c549953e83aa",
".git/objects/0d/54dd50c16433650b2fd726c0f87067753400b7": "49aadb0a44426beff90e39a377571f16",
".git/objects/0c/054d8f74a1b226eba150636e3b1ba76259ffcc": "4841b2feb71b37074ac77676a3f25a04",
".git/objects/0c/99835ea316446cc458befa33c4055387af83b6": "9c51353d1e3848a98da46ef0e6d2dd5c",
".git/objects/0c/d06c464b2a7e596018125a3689777c02e96380": "fce66c7681cd7a0559e2467a6957a338",
".git/objects/66/825b035633167f8a765f6e1e2525b6a00dc656": "fea689d698239572dffdd531432a6955",
".git/objects/3e/662679f960cfc929ca341c82fd896d2027f319": "2909b6667b06e6cd2c1f9a7aefd56468",
".git/objects/68/f89cbfd3440c46c9917b26a4f05891215c6e1b": "001def9ae77fdb7980d92589b4c60958",
".git/objects/68/c3959469026a14306a99db05c324428306ce6f": "fceaedb59385b4908ea6a3d83d6237a2",
".git/objects/3b/1fc8daa9620679747b0d35060bfeab2eabdfdb": "ed626e246d8ab7cac6037cc4a386a7f9",
".git/objects/6f/35620d22f39caa47b91da470db5536de7d42b2": "b21312b502311634d25c20ee4390d810",
".git/objects/03/bcb431e982ad4567c3e1507c8b5f3f00ef8ab4": "0912449a2494853701fc87b890684424",
".git/objects/03/d6b91e509f4720b3146fbb3e3e50f69975061e": "e2f43559b7f94dcb0ec16ac3d6b95c44",
".git/objects/03/2a010bc3f04c864c4e9b97e91a36720c4be795": "de941771d113cddd705c0449eb476fee",
".git/objects/9b/a0c2a4912d8c4a72f38131fb5e107bc2add063": "57bc253d2b226a9714777a6ba615c022",
".git/objects/9e/41ec41387c326e4fd3c9e6a890abb9adddb1e7": "0905356f85bcf73f55a30166fbd53fc8",
".git/objects/04/0b0a184c10a3f41ca04394bbf549678830d17a": "6f9d2a40b2e571669910c1b8dc76258e",
".git/objects/04/c2c2bafbdac381411371b14870878917851651": "d312b983dce6111d01a5ecbf99b317cb",
".git/objects/04/944ee1aaef7573b7a1ce6d242d001e217ba92f": "8ee27049a746abb7b413698cd62db3f3",
".git/objects/6a/5cc319ba2532f6caa1fd5f3bdacea681727c07": "926f362c3a4533e25206415282cd7c1e",
".git/objects/32/32a104cd87575f11f0cbe01781afb6daa0db17": "dc6ab33bf93be0fb77cc19f6899ddbbf",
".git/objects/32/f0c8f8a8c26f6803a58e49210777af0a87d28a": "16f6afb11e38052eac5f206f627cb837",
".git/objects/32/66c9d412a20a15f9ad3d4a200188f6538e6b4b": "b5d26f514071a32dae31350f479fce94",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/51/d1dfc044cc94e4041f21ae9bec0d1f0f0254d1": "a1982aba594e4be70d51688bd9dd03c3",
".git/objects/51/c5e143ac2da3de418d6953694b157764b174b9": "44f608ec7f3af586a9848337a37d847f",
".git/objects/3d/2c86a613fb59d7f616e4d5c4c028dc4a6fa208": "e372f6b1b67276d2eb5b45e7cde502d6",
".git/objects/3d/c55711b2dbfa535c23bf432337feacb6bf5a74": "ec2c8b312fae2d76f9a5bbe8eacee001",
".git/objects/3d/8202111db0d9c868085247ba5112b9adf885e5": "c03783b6d875f19ca13deb401eb09c23",
".git/objects/58/1264229976c3475324e7c22fd46a1323e3e0a2": "61a1e149bcd5ca461629226bf90f65b2",
".git/objects/94/28e2175a389db11930f3df4961c28f97e0e5bb": "9ef8f1a1bce1e243366dd4a371fd2d5c",
".git/objects/34/3ff1bae1abb962fbfa7e57d9e114255f73a459": "e45da8920215e744004e81eb3110af70",
".git/objects/5a/327176008d25363e39e4871f4efd6895744631": "fa5e8b09b271e9ee2f450012ce51ac1e",
".git/objects/33/99126924aa959f47c0d623807efe87171d36a7": "eae73dbb1cff953d72a82f4a6cfa1676",
".git/objects/05/ce87897732b4d4c15f8801af73259da4fce824": "bccbd178c324693a9c6506ce75405788",
".git/objects/05/095e6fbcd8edbf1c37f37f75c097cc6c3f75c5": "1aba7f5ed3845c7000b78387f961e518",
".git/objects/9d/f735f11cc3a3e77da5ec3e6ddb2860494c319b": "1acf1985296b43407ef35bbeee5cb917",
".git/objects/9d/59e09abdc78c8368c9d38a02e830a5c682307b": "71e63d901b98d3b67383bbd0c7edaf55",
".git/objects/9d/74e44f4c1976af3659566395664dab0a6aba7e": "41e42af567193465c93bb492de5cca5a",
".git/objects/9d/7dd08f01ea9dd69970fd522fbc4e178d739aca": "db0d2dca7f9b060ba96a3f4fdbae89f7",
".git/objects/9c/7539842b4f9eca9a0443dd317f274e9cfb4fc3": "7a0213fe0524173b0c3b9c766ce57fbb",
".git/objects/a4/6b5d4f830af62fabf152de35221a506b7a206e": "cd5c01bc348680b3353cac5f5dc28415",
".git/objects/a4/c8be6001c51d63a358aeb377c98636471bff48": "a9b5b586199c004f40c0697ea2be42e1",
".git/objects/a3/714e6bd3d0c49e4390e11ec35cf6e44ce91690": "c8069a1905d56f1a7768308902bfccf6",
".git/objects/b5/45dec31138e91a395389651708708da689ec52": "28c1d76ea5ba83533caad28a1450953e",
".git/objects/d9/abd2f853c1c6e91d6728f568ad0564ea678915": "43e8d55290bb097329184065bb850556",
".git/objects/d9/772c164f6bfbcb311ded43b36a3a5ea429881a": "077c87fdd1815a773e7b1fb00d744dc0",
".git/objects/ac/0440ba26e1440682dffd78abfdd5da5a3c82f1": "640961ec1bc6fe146a6c0ea59ab13331",
".git/objects/ad/f808117e2caec75a695f09b408e3ded7fa751b": "4b1b596af3ef2456a76ddfe2d951f600",
".git/objects/bb/8307a898683e9a83683f82cd6f0ad8c28f48dc": "2262cb4fe1f228b8cdde1c3a69cc62ae",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bb/419e713a04a38c682d9e868de394c65120e1bb": "a45e15efa9675d58aca6d5ba3a77753b",
".git/objects/d7/e4d54c9e68ece1e202f741d4bbd890e4369fbb": "272185b41d3f7e9bac0119a17e55db6b",
".git/objects/b3/e8a89232b3503a297c697fe2e83ec01ff798da": "f1381b5a8567f376ed1dba8322c99240",
".git/objects/b3/123aca0e4169f51fc8de2909599823acd443db": "548a09c164d4f7b1f208ee22ae35c52f",
".git/objects/df/28d0f2717ce66c90a31503ca2d4cead1d80291": "b580fd07ae49ad51be2ea5d056ebdbee",
".git/objects/df/1bce7ebc479d00c1e614ce6547aa0ab543eb6d": "973522ba92ad2adae5bdf0c6022ac4e1",
".git/objects/df/0e80684c18bc81405c44d48103b500b5b48c5e": "a0e295e8d0478870d2fdd23aba3a94f2",
".git/objects/da/776a9a5aeecf6c744cd883e6b61f8a5bdd061d": "f835eb25a7345e237823c86543a12083",
".git/objects/b4/d31efd0dc7868b26ff864de36491cce98ecc39": "cfb54c2843ed6e6a158935e32f2ca265",
".git/objects/a2/6368ff3a4ec03d02cb931f1f27723e7e136cc4": "62ac5920a24144ff91480f2b7c2236ad",
".git/objects/a5/0efa2341dbdfae992cbe702f4ff8ed43fe601e": "c961a71f02b1fba8cae18be20eb992da",
".git/objects/a5/961e2a32b7ddbb009d12c27521faf713e39b51": "22157a55f068a43091886124ad801897",
".git/objects/bd/e92e3ad037a4d514d979cfd1d3a6e803901821": "b0f023d5a6300849d7dea6eb01a2a469",
".git/objects/bd/31f01785d114eca85f7b0ed4b56d39fb9be2c7": "08d21865c85ebca6e34cca3866fdad1a",
".git/objects/bd/3d0cd55a667cdb24ea0517fd3830f0619ddfce": "356eb715d06a20b87a25906ef5fb579c",
".git/objects/bd/784a4ae96398e078db6fefb4438bf7d3ff33ba": "df9de04fb765378a097c534a4c277914",
".git/objects/d1/580c22ff42ab762eaa162a8cdec0a3e6d98b7c": "aceed9fbd872b825a674c9bfc6492432",
".git/objects/d1/85080f83fa01a33b19532f6bcdc317e40a673a": "e91d658067495c2ab41bc03f03433cde",
".git/objects/d6/62245a928cc206fbf8ad800946d86eb332b7fc": "9f37691b8bb41124e3a421e0445972bd",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/8ffe0f64ef3e27f29df7af908530a50c9f6d59": "e5ab8b7d1bc3a1c8e622f926d816e4d7",
".git/objects/d6/270f74ad9712d8b17293b535fe4738ad453d2d": "5b4709c8f3cb20e87b715bf6b3e78ec7",
".git/objects/ae/cc14245f7fbc859f9eec69ad219d9f6a437fff": "bb304c9a144f84168716eb72907fd506",
".git/objects/ae/1eca47f5049c8a9ed8edd4a016c6eef9e6f7e3": "b7af328f7fb8d08670d73dade9caaf8b",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/d8/eb9622767c6d213df277a23c4ab9d4ba13620c": "3531aa8e39394165c3e99fe30b765257",
".git/objects/e5/49d68d7e221fce68501544b06934d1eb5e97fb": "32b2b65393807229c38f67d939f96739",
".git/objects/e5/b40a442fe2419e647258c86f59649da01390f3": "449dcd146e924d1594f987f5002f9798",
".git/objects/e5/c0cf2461eebd57288f9b30ce07ac3d149a0dc6": "56fba3b9495ba56586abbf25c4bae1d5",
".git/objects/f4/d1ad6a3a4765264653bd5fda5c960f669cc1bc": "055a855def3289d0c52a2f9f46281296",
".git/objects/f3/e5e37e42245a80c72d970a624c5e2b5764d863": "c0c392284c6cf64eb3aeb244988e19d3",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/cdd7eb422cba5f4edf07e8cc22537b616811bf": "7c48a69ed86931cbc64bd608c7b02758",
".git/objects/eb/48668a2e51333f870a0997a90a14d21ad31577": "1abf536161541d2666aff4bf334c3556",
".git/objects/c7/0c964d272e3274a706856d76bcad42fcddcc4b": "d3c0a567dc19260e3ee1307bfe0912b2",
".git/objects/c7/9c9b6e41ffcf789236fa18bd65deef76892e50": "8629bfc4e2654683b607172b51f780b3",
".git/objects/c0/7a8dc5e39c15cacb6342c46c49c666f50363c2": "26dc3b5054abccfa9a38e9b9c34a7ea5",
".git/objects/c9/2044e12655f908ee06977e8d116e204ec53d3f": "a5b28227f2f58afe39545b7bb7a9fe3f",
".git/objects/fc/6931bdf5f30e86439d736a0876d35294c611db": "3b621bb38c7de2678bf878268d7354b1",
".git/objects/fd/cb1e2bec0089b841f06af88a9cc2fa68b7319b": "3e6773cec780bf1f18b3b4734845df37",
".git/objects/f2/8fa857c0992329f836588bc9a0481215158298": "76db78218eac237a6fcc1eb7868e41c1",
".git/objects/f5/01cf9f7ea98038d6fab1805ed9be8a58a5cc5f": "5e4dcc07d3c55c139bbe70238dfda71c",
".git/objects/f5/e9ddf828cf8eabb49a4b33be2309185a4db80e": "74b1d8e5dcfd4f2752a8825ea84b37c3",
".git/objects/f5/23fc7218df29b66d7bfc77a9e16f04db230993": "257d29e319408bc19712ea57a1aba59a",
".git/objects/e3/238aebd5a8711af6575e60f86d8f6e5a6abb54": "61ce44169edf2479c29b05ce2a165dd4",
".git/objects/e3/f629f50e5b8bb99b78b0d6d8cea93432351442": "ce32d1dfd11729a522afb3601a4cfbc2",
".git/objects/ca/3605a191f7d374360cc2a6ac4c0e11125a93d2": "1dc2279c639232c19d44e8a09c1d9474",
".git/objects/fe/932a7cc3529b915884da2e733274f573597b0d": "645c8be79e4a5f738b6fab1b068021fa",
".git/objects/fe/5bf3b2173f9caa4ac24b1787e6f09079bc3f80": "9912f24dfe771ed8fd2f1f2296597049",
".git/objects/c8/26b33098764b72a1d78d3cdd699955b479e0e6": "b1673fe76e5daa4e1460533342e72663",
".git/objects/c8/39b072d60ab43adf403717595e9e70045f3ed9": "02253b77437a858697a05fb85bf3cb63",
".git/objects/ed/2e43fdd2120cc6a7c14b76d1929efe1718b738": "2c9830078833e8d5cbb1deb3eb65c065",
".git/objects/c1/e50f77009440c6af2f5d9ec4f1d734b6524b69": "fde74a5caf27e9c06972715004762cc1",
".git/objects/c6/d9e8b65f1cf489198342c5199ea9851b242f5e": "c29afdbc797138ec1e4500f62c903db5",
".git/objects/ec/37aafed2922d35ba0642b63f9201f8b436d090": "01d0e003b0f965956e05b8ebaeea7b73",
".git/objects/4e/059fe0798f281b6ba348036d1d77955bf94621": "049ade0f1a781e93ad76f1cbae6e4d2d",
".git/objects/4e/6e6bc0ea5d342275a6899e8af46bde4bc5fb53": "a9ad0add3807b2ab2bb0f404ce94004b",
".git/objects/4e/d696f65396a275b0e93501bdffd67581185aa2": "97c520fb445df07d015e6ac2469a101f",
".git/objects/20/d87d117c31184ea7e3abbeb48bbc95a9f4424f": "c1dda5ef7e85559f8651cb33da3bce85",
".git/objects/11/549b0308efe419d30e0fdc86502a3e94463e5a": "7e0b7458638204a50e4f3dbcb7aaa08b",
".git/objects/29/ba25de5ca9872ef4c4496d49423bef6d2eadf1": "dfca649a40300e12d79268e7fc34515e",
".git/objects/7c/0efd46473b5e221854c0083716f164b1944459": "2f7728108d488f286ef74237db64a7b1",
".git/objects/16/1758b84677e16f4fe39b3c8c072c893bdb7f1c": "10bb7630af73fbd06a093176d4ecf4eb",
".git/objects/16/46762c0e2abd09ac014dc012bdfedf9ead83c8": "601a96af585e8dc931abbfdb44a54341",
".git/objects/16/07fd66e67004ae0d52ac9e10769e8f2436bf22": "1c218be290e71badb2e2050f90d2672b",
".git/objects/42/fffdff29055672cd11a0c17de9b7f4948fe179": "51920f86f97da25b385e7c64ddab0451",
".git/objects/42/d0ceeb8000c4ecc2cf8085b706353423e15e8a": "ef8c8dcb72f26795ef5d24a1a255f4a1",
".git/objects/1f/24b8cecb28436b0a7376417b6f88a73ccc5228": "8c20ce044b6c86f8d0e5c410098e8d9f",
".git/objects/73/8b579fde917c8b5c736e6dbc24fe1d2a263ba8": "0a5b4e721c53cf87104ee3ba8fca16b4",
".git/objects/73/74312057e8a32b6563b0bf80252c12b4af1772": "d8236d768067647db97ef732087893c7",
".git/objects/74/e2b4c0b24cdf176ea1ca609b48139573aba236": "3a574302d56e88d958e3d5619a9ca04c",
".git/objects/1a/1c398dc505caea3c42cafee320bea7daf30f6d": "ce9ef5b07768ebb3f51a986442e03b79",
".git/objects/1a/e98fd1d2d3fe2fadde2d5d12215dd43a0e7ab9": "589feada3fde172f5c2a72a5906dd93e",
".git/objects/1a/32543e8b0d3ba9dc65fdffafd555c4f8b0475e": "377cf6290c63a6658f29fcfbe3ccd57a",
".git/objects/28/865efebb7ae380524667cae0aded8f384ef823": "b126009138bbd721585d1a130b3e1828",
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
".git/objects/75/63d686be173a9560468ba47ab6ca1b7460cf85": "f53c4167a95cda91757ec1875c3562d8",
".git/objects/75/e7e31c04b40bb3ee5a5098e148381def177238": "38972528338d77ffe519ed34cf964312",
".git/objects/81/42b42d6bd5b62528d45dda919e107e57c29965": "11b71f632c5ef824553969f407df2ac7",
".git/objects/81/7625313ebe519ef6190f1da38c5942cb5a1998": "0acefe2b2526283e30e262f043c6bc9a",
".git/objects/81/6950a2ffa20e01bdf78048382e8907a64c9433": "6076b296222c3c5346217ee1e8de822f",
".git/objects/86/1a6c4060ba7861ca8c9b16b442fc9cbb682288": "b3e2f1ba8e305a28ee7b1ec687e334e7",
".git/objects/2a/05e8390adb3420b026d11f5ca6042c04623a82": "56a64cf95d30ca5417a236575e147035",
".git/objects/2a/a1a2aad51b3de09d8706c4c6d1c6d2202a2cb6": "d06f4cff366064eb890976f7ff45085a",
".git/objects/2f/823cfb164ec25fcb1fe7885ffb512ce25aa115": "3307dab416853f5990934f4db9d8f835",
".git/objects/43/128bb3f8511ad3c175a9af56a8b4337adecf7c": "35a416d3571c15a1869201a147371406",
".git/objects/88/c5fb3a81ef9bc25eb990fe65716af1f91a02ef": "915a91adf3b61b89cf46d58b3e43d0e5",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/e7cef8f144af0ca012bb490aa1c1fd2adfed04": "f79160fc99df1a3da4fde17362ee11b6",
".git/objects/07/d68d647d3025378d7c766bc962926faec9a638": "7eafcb2d65bcaa85638cfcbd83585950",
".git/objects/00/cdd412771ff90636dc108500dd714375dab6b0": "96fd587833fba0c767e6d4bf91d6f78b",
".git/objects/6e/772f76e6ac6c7d113b77895926c8886a24dcdf": "98a226d2c3788859949537cf8298aa63",
".git/objects/9a/261fbd20b5e03cdd8d7412720daf612d03d2dc": "aa36a836c6244d8f4abbbd2faeb78346",
".git/objects/9a/22ef86ba4bb1d138f073a9abb1a0f90783cf08": "ca3c65395eb7f8efa86b64284d9f0e13",
".git/objects/9a/74c9dfa3be1da30c0613ce824310f14bbfee6b": "18015996663ae7c26ca83ffa59f4ea2c",
".git/objects/36/93eeaa2f72c3dd69b86a1f25c92559dcb0136a": "d2a91892356b7e86bd9c775c840f4d13",
".git/objects/5c/8daa8f85d49be6fd566a4b9b1189da0767e4fa": "28d20baef8573c46f34adb5aec3b761c",
".git/objects/5c/c640b7b09d90d90d804912fe830ccb573ef1cd": "9e0ab9af9c32682f0e32260f1fcf7e1b",
".git/objects/31/bf993db0902343c41b16c98a7ba3a0f69ee96c": "caf1a11a5b613912a9eb71d18b1bb10c",
".git/objects/91/1dcda3eaa182ff0ea5501dbf38293d3ebdd7e3": "72727321f3889b0d0ade3e89f31764c5",
".git/objects/65/36d91ff2a7d16b1576f57719a73f8514eb7468": "b5e4355645925d5febc1dab455a285ec",
".git/objects/62/e00e79c12796e8830bac25a20ea3e282ea3ede": "32d6397b1d9e3117570ca1c46259ea51",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/96/f2a422b07f9f03327156821e2b7cce721d5d35": "8395b3d97d09040c38af6c57f5ed5ae8",
".git/objects/3a/cdf84c3199234a4b301960d69629ed3b6b2bef": "a6eff834a1f1d919c5a7dc18bd3665c6",
".git/objects/54/c0c779ab18ff1822aa3c8df238c870986739c7": "477e1ef93809e47eaebdc2cf086ecd1e",
".git/objects/53/8d725b62c69457d662cf096bc1375f9c1c022b": "ebbe38a61611198a9fc58321f5e4c652",
".git/objects/3f/d5fcd086b073aa624ac444a962e815c3e99ed0": "061b22e7e274ee096c7a365037a53f0b",
".git/objects/3f/7dec1d392857828abb3760b86ab73b78fc2d63": "9d4f064665b7cca42213ae37bd9ee28d",
".git/objects/30/0a815190f18419db8386aa707842f84c10ad5b": "859e43f0ad0c7f3c4d3217367797a697",
".git/objects/5e/e7a9da819d71ee7d547c9be26e216f75dc8bb1": "1617a400a8003bdac50066cba5985a41",
".git/objects/5b/c895f503a92965345895d296131062e831af53": "b64cef3783742917edac7f9188134a2b",
".git/objects/37/04c2ae6ae8166bea256e682dd6a5fa3954e047": "f2c5c32d99768e9b1a6155d1b9d79342",
".git/objects/01/a38d376a4dc5173f13f1ba643e650998539155": "f066ac44d1ac2770115bb3f8887e7145",
".git/objects/01/3a0fa9e659460c283bc52d468774fc34dc2030": "4f83835c343cab411fe7bc5ad51b77c9",
".git/objects/99/a6d1dbd2f01a71e642536409f2dfe86790ae24": "349779b2c18cd381ed00e122abe87d6d",
".git/objects/99/2c2d3fe9cc14b3768a029676a56799e676b35f": "a5b745b2bc7be605159e3bd5bb912642",
".git/objects/52/ce142e5c15176f1c7d2ff6d6b6c4bb45b9e898": "0a11df6cc3d667b7bd4d79a9f4795f10",
".git/objects/52/824040b6546b16fd4092934ca01c830fef0527": "0acbd4376506ee6444f338bfa307b997",
".git/objects/55/23f81d238ea5a41f0c2ed3359ff99773b194e7": "13f3f61edaece20aaf177f8b5239f941",
".git/objects/55/a6d0897a343dee67b8bd1eb10585b60699d7d0": "f1e31270788beb00d8367f846ab6d37d",
".git/objects/55/da76961f6785779c59a0c7c36cff281ca11f10": "7aa64083ca8393d4d6e5941e245baf1e",
".git/objects/97/4565c04a2d69cbbd50f6ceec72c4e3b3ede7b0": "1714055cdef4b732dcb596693e913e7b",
".git/objects/0a/46fc94849b53ce55fefd49c9a540c065246fde": "1bdaab2423b02a3ac6d3e40cb5f97197",
".git/objects/64/a6649fdd214d98e011f7531fc714a973420c7a": "b77b1bd877b312e6ba9ba7bb8d65f747",
".git/objects/90/a5c3be89051cb4a67c80109df14998e7ca71e5": "1cd4eff27407b1f6a101ea10740bd1e1",
".git/objects/90/fa51510baef65f67ffe5d482bfeecaf22ad0fa": "5df17d556057dc1fde400d6c01f41fa3",
".git/objects/90/db9cd98b761b2356ada7f2cc0a5b28b7fbf630": "a19f232fa1defa6825f17688d1aa9e48",
".git/objects/bf/a9ddc1dc461d29f42d73f7bfb1cb41b5240fa7": "f79602ee7860aad7dc82f481e0515d60",
".git/objects/bf/225b8d01e312168ff3504247b4b78f2acfdebc": "caaaf2c4d6b92ed625f9846ce9acc265",
".git/objects/bf/93b2ca99b6b3110f1e6b82586ba066ec60b799": "283c537ee8f9ee4548bed9e475ff3f1c",
".git/objects/d3/508316fd84e9ae199681138938c5ebccfe4736": "855f6fe53cbce12997cc5ef4e739456c",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/c1b73632b2018a6f2d3ce306c26ce9925c77f9": "f23d54c85b0bb77fbf7b5e95eb9029b7",
".git/objects/d4/30c46643bf7a9a66a695c9aa2d9acb38de077c": "c759450cb763339b6d9ce3c1233d7ac3",
".git/objects/a7/eefe976a018dbfcdbe63009ea697e662a95799": "76efff5823442ac33d1a2faf5163c9e5",
".git/objects/b8/c5cb9d0c3a79f911d1e4dbc49ff7f36fd82897": "7180ce3dee539cfff98052f6e1839a5d",
".git/objects/b8/26ecfbb298aa7b92837ecc38354589014af255": "0e1e9e42588f994cf2a066cf98a1bd14",
".git/objects/dc/87a071a007bd593c1934c5aea1a06de856120d": "da1467700a883f451d11c4a3d83b35db",
".git/objects/b6/324b85b9dc59e314d3098b2230de6e8f32e308": "afc7aa2d15d028b74e18ee5c070148d7",
".git/objects/a9/b7f28a0986b9b2bc3d2028c4f964be1b58130f": "6b47a1280c004dbbed7d14b131dbecd7",
".git/objects/d5/a42626b17e68d3b7ee6c4aca4030bc067d8712": "e9111dc3322cefb74ab304f6a684a577",
".git/objects/d2/c0950a337b86360be64a2ae3ec58ad69f9786a": "b57066ea7042a3024ccc9731f6d56d80",
".git/objects/aa/faada3e5874480e65cc623ba7c42ebc1b92b5a": "c3dbe6b9d10618b747d36af25594b46f",
".git/objects/af/96cb213f5f972b9fdc911241cbf17ff1ccd07b": "0d2dc2eeb8403ab097ee4312e67047c1",
".git/objects/af/81aa9ee094eb8e0f531e9e61b2264cafc6fb23": "56740c4b3b5e25cae284b8a5f9f367ce",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/dfd93275ae12f3c526a114dd24cb938f4334b5": "db36800e8e503f62fdc94d61cb04b7a8",
".git/objects/db/3db6fef89d6769ad8183a8b87ddfa26eba9699": "30307362d41719d671a4b18c8f94315f",
".git/objects/a8/19eff4bc03c50727f9594fe2589f5adf644232": "ee960619b1c0d77abfb76d0495c02700",
".git/objects/de/8efc2715d07fa5f035d186f3717eff1aaee433": "a2302f16dac9098e61f8dda718f40b7e",
".git/objects/b0/6e9b3521ad0c947cad12cc955be7565d4993ea": "4d3a90c204dadc65dc4cac8edcb0c0c6",
".git/objects/b0/022e0d608cd8f006c1d348050d84bbaf8e8097": "5d6a6e15434377c21c3488292b904b74",
".git/objects/b0/b30423c482ad987a2ad8c75ddc0a34c8a78cbb": "9cb3a98a54ee0410519de897ca57afe1",
".git/objects/a6/6bc5c37797c9b4bdebcf90eca259ed939987ef": "62ffef7c199f7fc14787bdb13ae2d912",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/ef7e2d6690e3b54f7b227427562560f41c8916": "1c5265f005561be9cd13506e7f33cff5",
".git/objects/a1/609d106194efeea7c15e2583f91ddc69f63234": "cf978255dd8c69e73e9b0f1fbd768fda",
".git/objects/ef/d6d4ed51c4d8a983563f0f9dc6c7063413fbb5": "294c743ac06f93a0aab02f86eda44107",
".git/objects/ef/f24e421d1ae37ba5473e86e2198aecf12fea8e": "5437f2c67e2a00e1e67fb449f5b23fc6",
".git/objects/ef/6a17aa4a0f19854e9f4a44e24ab7b22a7ef8f5": "81eb9cb9f0765e260c64e38dab7a8d90",
".git/objects/ef/3b7200d7f500dcee8989de41716ff62ac58dd7": "cfc43efedcc5bee775c2766f4770c23f",
".git/objects/c3/220fc9a041d0df639ad012eea00e19af5e09f4": "d1c659e379406cf42bd14e39f3ced2f5",
".git/objects/c4/f5814a08f0054d2a63215c0df65f7d3305a480": "79b3f985250503b5bca2d84aa1b2b1a3",
".git/objects/ea/82961b0e27545685bc11e5d6f360fe8d45572c": "526ce6ad1217b2e57a027ae39f366a74",
".git/objects/e1/616d01f523e65ca5a44c43dfb2505c69688a32": "7611b71fa245c760046a5a5352ca6384",
".git/objects/e1/11a62f6a4317838a3f94a29c88ea269cf93b15": "45094e17dc1fb5d4d7e245b02f5e6702",
".git/objects/e1/54252c69eba65f3f82a270652187f168a95dd8": "e346f1a2e0ac7bf820272ba63dc05c78",
".git/objects/cd/8b7ee74087fb9e5e7dd3e84e51c36e0f5f2932": "e494994a7781b588cb1e0a87458e04a8",
".git/objects/cc/f3738209e79fbd7ee7c4d6d279b3189d96dbae": "1c917d4f892af94a183a29f43fbd1217",
".git/objects/e6/692afdff02f9d7542bd4b4a00f6e3df88e0b87": "d77657b60bf5a774933b4fe513cb519a",
".git/objects/f9/81edfb1a3442da6d39fe2cd929a40bb8220899": "f1b5f481f495b4494bdacf7fa0456379",
".git/objects/f9/961ec6274aed8221a8446ea1e046dfb9c4cd4a": "3f5b9aff3a122af2fee5fc8fa5516cf7",
".git/objects/f7/d0a99a6f2b6db0383944dfe37e7cff9b06c7e7": "eb21640ad7d16bbaff30c5b4c238d482",
".git/objects/e8/c7df68a6cb6dfe75ab4412c380817fcd91305e": "2a7c7d8e01ff8011cf1482d7cdfa44c3",
".git/objects/e8/cb561d3826cde7a10a0824235f787fea0c923b": "b0ebfe8b594cdccda5494f9b4dbdc4df",
".git/objects/ff/79c062cc92dae6ce421763b571b28d78d7f21f": "d6e3b277ac39f4845be264f020b28729",
".git/objects/ff/faa2ba8ce9f8b46f7e3316913305cef9cc0b9a": "b3c8c1f61fd89d650402128c16238fd0",
".git/objects/c5/41a38a3e40a8f5f6b126d54f274dca55b44993": "f5a58ad2ef4f6a0ea041e16d4f3be792",
".git/objects/c2/9dbf885a12464e8fbfc7ac3c3b9ba511142306": "c104b162c355bfb8926bebca754e4290",
".git/objects/e7/2b6fbaf512ed2d3fbaa2b8a117c6640376cba6": "7cab855b2b80a34d3ab3413944a3aefa",
".git/objects/e7/3375c358594d8909f9a40debd615f1eb2a26cc": "6b77d00a00ab018ebaa57635d4fb7106",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/cb/3e69e7c36640fbdf9fc27ede191ddc67116f68": "17067381295883826ade033394a112fc",
".git/objects/ce/ea49b0a7b5c124c6ea17835a6f55ab10dc1241": "62a6b8a45c13b92edc3d3e8b099540de",
".git/objects/e0/87ef3b7b9b68cd7d5c808c1d1ccfcb78babe63": "34447544a32bf5220e8bc1752df69920",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/9d3fa74b862a7acc5ae545cbf4c40e53ce4eb6": "3023a57bf2c40ade329bbf2a825a0394",
".git/objects/2c/00be8e01e0c4a5910ad5c41e15f0cc41f3ae46": "947e61ef5d6c1b1264060bd8bcd43952",
".git/objects/79/4692ba84dd7b5941cbb39efaea489929f65895": "41f54637a16233039e03e3ef90926b5f",
".git/objects/79/01e32cdd6c6a7eab4fc9ca62e45fef5d31b3b8": "ed1489a98e0bea83f39099e07e1e5e80",
".git/objects/2d/ff83334f60d16055d535ad0306d660ab75b45e": "481460bc6b8f2158460175e4a1ee953f",
".git/objects/2d/1c5b75a090edb7dfa06ee7a9c3964630c1d999": "b9605c37bde8704b3df2389373d80617",
".git/objects/41/98cb32a5ed42e9171940feb41c9e6d92c49804": "c22f304da697f5321eab61f523245a24",
".git/objects/41/64ccfcafa8bdfd8f0bcad696bca3e4159aa56a": "9a9b74734c1e13047d8e431da7528be1",
".git/objects/41/c18bf20eb2a42b9d33e077a380d65b8be69e03": "af2550b55c88d04e8e1c1b91bf005b47",
".git/objects/48/fb3273f80c1c0f2acf5dcd6808b29c68f7f263": "d07ef2fa925bca01564a8b568ff4afcc",
".git/objects/48/c30b1d3c58ee734257d029948d45e5f54bf5fb": "ac61349c8d43501206e363ad6d2d802b",
".git/objects/48/97e8613396a7e7311a63544b4fb958d1f79199": "481b69aac20e9ebc076708a1a4caaa9f",
".git/objects/70/7809f2e91e6b4fa1f6ccf437e7895824270a5b": "712cdf9386cb59aaab7e9f4cd1d060b6",
".git/objects/1e/b2df390addca67d76f52ebc9dbd6449e75166f": "4a411b76cfd532f8362cd27f6400c79a",
".git/objects/84/2ecfa1732fea6603aa8fd8d84bd296b114e931": "3f5923a22d6157045a24542caedb164c",
".git/objects/4a/80c056b9869fd008d436e365640a8fa5c7ad80": "f7f60f04b49b5d62796be1d4cfcd6bcc",
".git/objects/4a/5c7f439cff98abc788e45a357b411feb3901ff": "5d5896d59b8025ccaa1712d7a034f1a3",
".git/objects/24/0b53739e5af0a80fbaf0d8f6cb6beb034fdf11": "6110d8ae5ca4114cb9c395bdf7d4a9a5",
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
".git/objects/47/9af71d21fbb272246e7f210fac204d93ad5933": "a71bd94d1eaf93486e55e4703308809f",
".git/objects/78/2557da86d2aa6406f969d238c0799c175ef1a5": "297930dd754323e9dc0797d691ee547d",
".git/objects/13/5ee59e9b20dad2be05a07c9964edcd76239bbf": "f223e3ec5dbd078f6cfc6360ace77c5b",
".git/objects/7f/6c7ad175f51f2c6ccf9e24bf051fbeeeff9a22": "38e107a610755bc5c770fd6789eea244",
".git/objects/7f/4710cbc09a0859580a5a7bcd78f2f239f2ef58": "814a9ccdf20b9ada232d133128d1477a",
".git/objects/7f/6f88ba3df99571c8e6784bf53df413f13a6ab2": "29bd3323760f7594ab253fba458d32ac",
".git/objects/7a/47d3be1d32af90a0417976aa1600756134a00a": "b0d95608173bc920b1538c7465f386f1",
".git/objects/7a/bd8267443a2b402ac14d5d833a3e87a0109440": "9261d3ab584df10f8e5d475feb400986",
".git/objects/8e/4ecafa8c20804734cd196807ed3ebd53de36de": "573268c399ea9242b4496397351ff07b",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/8e/89ae39498f24ccd4dd68259edf6e99442b2dd9": "93dc8ad1b3f6e83ea110e55e10d3093c",
".git/objects/25/355f470027dfb19f1c5a92c67d4faae956f5bb": "b5cdc03ce1c0218cd7ee3d4eb7ae5367",
".git/objects/25/07662bdd491dc88e76e82b8ae68669cb428b60": "a4fd609c4c449ead9fd5a5ae433c7462",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9a7ecccf5990082042554e73278c60b7",
".git/logs/refs/heads/main": "d9abeb5513fc49391a4fd9be70ac1ea7",
".git/logs/refs/remotes/origin/main": "20846a61b14d0bc33d79a5dd8f3d51d3",
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
".git/refs/heads/main": "3cbd085fef39dd2345f3a0254484ab96",
".git/refs/remotes/origin/main": "3cbd085fef39dd2345f3a0254484ab96",
".git/index": "4ea4babb11c5e57f3d0f471e98c1f55d",
".git/COMMIT_EDITMSG": "fccceef320fe3813b663ddab3a44d957",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
"assets/AssetManifest.json": "aafc79d7dbe7d06dab228a7a0aa3615c",
"assets/NOTICES": "88be5973d7fcaf21fc52691178474d9b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "51d4612414dd04381b2f0e1b1f3d8fea",
"assets/fonts/MaterialIcons-Regular.otf": "62ec8220af1fb03e1c20cfa38781e17e",
"assets/assets/images/8.jpg": "1eedb6d1baddd6ff972b86ffce0b2f34",
"assets/assets/images/9.jpg": "b231cd6e238fb79cca5efce17d03e39f",
"assets/assets/images/main2.jpg": "b097211ea45c7cf32a7505807ef81825",
"assets/assets/images/14.jpg": "d2c8b2caf47979587f93c2ffeca322d0",
"assets/assets/images/divider.png": "bef37b4625a5917bdef13ac31a4afe2a",
"assets/assets/images/15.jpg": "a4f5aebf13e42ca522d443f39b2ebd7f",
"assets/assets/images/17.jpg": "a3a6dbe0ab5f3e1003fa300e99c75f15",
"assets/assets/images/intro_flower.png": "538b76ec213c3b3d1cb5bb0ead1b4365",
"assets/assets/images/16.jpg": "116c99dec971b3aedec397a7d2e29057",
"assets/assets/images/12.jpg": "8c9e33d75f601c87d8385e23d64f1066",
"assets/assets/images/gallery_flower.png": "423c12222d41960e3f52fb171cce183e",
"assets/assets/images/13.jpg": "492f5f0cb1b8166d8db555935a1321de",
"assets/assets/images/11.jpg": "fdb0b1181646dff5cbc3c042a972bdbc",
"assets/assets/images/10.jpg": "3723d403a5d9dacb261a7359727a4c2d",
"assets/assets/images/21.jpg": "a2917702bbbeb938f5b00414f05e10ca",
"assets/assets/images/20.jpg": "89b449b5cff60f913550cade7a5b7f05",
"assets/assets/images/18.jpg": "2595c559c647a9af020d8d62d9c388cd",
"assets/assets/images/19.jpg": "d6ff2f520d70fa4fbe03ad4441611833",
"assets/assets/images/4.jpg": "5ff7468891cc46b3d1b966d933a2439b",
"assets/assets/images/5.jpg": "aee6ea2e6bb3dbe6920a89eb4dd960ca",
"assets/assets/images/7.jpg": "f6aa07123ebd4842776c17037a5f206e",
"assets/assets/images/6.jpg": "1a32398a16613b2dad8d37a0c2315f39",
"assets/assets/images/2.jpg": "195f52ca436f1e5f9f62132f3a7932c3",
"assets/assets/images/3.jpg": "a8e97352aa1fb6723e76e4e8d0cf1852",
"assets/assets/images/1.jpg": "b075362da9352fed0df4cb205c10b231",
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
