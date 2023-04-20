'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "93ac11bd1ce63d0041ce06684c6a0afa",
"index.html": "b1143108a286398937cc628db1d796d3",
"/": "b1143108a286398937cc628db1d796d3",
"main.dart.js": "a8dbff08ae0b30d7afa45ce54ef01b24",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "3efa812a0c29d93b5928a89e70466793",
".git/config": "d212df4688cd9c2d0beca6a07c0f64a1",
".git/objects/03/d6b91e509f4720b3146fbb3e3e50f69975061e": "e2f43559b7f94dcb0ec16ac3d6b95c44",
".git/objects/04/c2c2bafbdac381411371b14870878917851651": "d312b983dce6111d01a5ecbf99b317cb",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/94/28e2175a389db11930f3df4961c28f97e0e5bb": "9ef8f1a1bce1e243366dd4a371fd2d5c",
".git/objects/9d/7dd08f01ea9dd69970fd522fbc4e178d739aca": "db0d2dca7f9b060ba96a3f4fdbae89f7",
".git/objects/a4/c8be6001c51d63a358aeb377c98636471bff48": "a9b5b586199c004f40c0697ea2be42e1",
".git/objects/a3/714e6bd3d0c49e4390e11ec35cf6e44ce91690": "c8069a1905d56f1a7768308902bfccf6",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/df/28d0f2717ce66c90a31503ca2d4cead1d80291": "b580fd07ae49ad51be2ea5d056ebdbee",
".git/objects/df/1bce7ebc479d00c1e614ce6547aa0ab543eb6d": "973522ba92ad2adae5bdf0c6022ac4e1",
".git/objects/bd/31f01785d114eca85f7b0ed4b56d39fb9be2c7": "08d21865c85ebca6e34cca3866fdad1a",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/e5/c0cf2461eebd57288f9b30ce07ac3d149a0dc6": "56fba3b9495ba56586abbf25c4bae1d5",
".git/objects/f3/e5e37e42245a80c72d970a624c5e2b5764d863": "c0c392284c6cf64eb3aeb244988e19d3",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/cdd7eb422cba5f4edf07e8cc22537b616811bf": "7c48a69ed86931cbc64bd608c7b02758",
".git/objects/c0/7a8dc5e39c15cacb6342c46c49c666f50363c2": "26dc3b5054abccfa9a38e9b9c34a7ea5",
".git/objects/c8/26b33098764b72a1d78d3cdd699955b479e0e6": "b1673fe76e5daa4e1460533342e72663",
".git/objects/ec/37aafed2922d35ba0642b63f9201f8b436d090": "01d0e003b0f965956e05b8ebaeea7b73",
".git/objects/20/d87d117c31184ea7e3abbeb48bbc95a9f4424f": "c1dda5ef7e85559f8651cb33da3bce85",
".git/objects/42/d0ceeb8000c4ecc2cf8085b706353423e15e8a": "ef8c8dcb72f26795ef5d24a1a255f4a1",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/1b8a6b91238b07cb2b294f69e90d9ed0069afb": "a46889137131388896e0227fa4212a96",
".git/objects/26/aeafc2762285ad08bb376563fdff76499de20e": "685b77a528f90d974f6771598a64fdc0",
".git/objects/4d/378a220cce1ef5aeebd3d146c85f288c22d555": "7df6dd3ff6738dfe862b5a404fd41cbd",
".git/objects/86/1a6c4060ba7861ca8c9b16b442fc9cbb682288": "b3e2f1ba8e305a28ee7b1ec687e334e7",
".git/objects/2a/05e8390adb3420b026d11f5ca6042c04623a82": "56a64cf95d30ca5417a236575e147035",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/e7cef8f144af0ca012bb490aa1c1fd2adfed04": "f79160fc99df1a3da4fde17362ee11b6",
".git/objects/9a/261fbd20b5e03cdd8d7412720daf612d03d2dc": "aa36a836c6244d8f4abbbd2faeb78346",
".git/objects/5c/8daa8f85d49be6fd566a4b9b1189da0767e4fa": "28d20baef8573c46f34adb5aec3b761c",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/96/f2a422b07f9f03327156821e2b7cce721d5d35": "8395b3d97d09040c38af6c57f5ed5ae8",
".git/objects/01/3a0fa9e659460c283bc52d468774fc34dc2030": "4f83835c343cab411fe7bc5ad51b77c9",
".git/objects/64/a6649fdd214d98e011f7531fc714a973420c7a": "b77b1bd877b312e6ba9ba7bb8d65f747",
".git/objects/90/db9cd98b761b2356ada7f2cc0a5b28b7fbf630": "a19f232fa1defa6825f17688d1aa9e48",
".git/objects/bf/225b8d01e312168ff3504247b4b78f2acfdebc": "caaaf2c4d6b92ed625f9846ce9acc265",
".git/objects/bf/93b2ca99b6b3110f1e6b82586ba066ec60b799": "283c537ee8f9ee4548bed9e475ff3f1c",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/a7/eefe976a018dbfcdbe63009ea697e662a95799": "76efff5823442ac33d1a2faf5163c9e5",
".git/objects/b8/26ecfbb298aa7b92837ecc38354589014af255": "0e1e9e42588f994cf2a066cf98a1bd14",
".git/objects/dc/87a071a007bd593c1934c5aea1a06de856120d": "da1467700a883f451d11c4a3d83b35db",
".git/objects/b6/324b85b9dc59e314d3098b2230de6e8f32e308": "afc7aa2d15d028b74e18ee5c070148d7",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/8efc2715d07fa5f035d186f3717eff1aaee433": "a2302f16dac9098e61f8dda718f40b7e",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ef/3b7200d7f500dcee8989de41716ff62ac58dd7": "cfc43efedcc5bee775c2766f4770c23f",
".git/objects/c2/9dbf885a12464e8fbfc7ac3c3b9ba511142306": "c104b162c355bfb8926bebca754e4290",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/79/4692ba84dd7b5941cbb39efaea489929f65895": "41f54637a16233039e03e3ef90926b5f",
".git/objects/79/01e32cdd6c6a7eab4fc9ca62e45fef5d31b3b8": "ed1489a98e0bea83f39099e07e1e5e80",
".git/objects/2d/ff83334f60d16055d535ad0306d660ab75b45e": "481460bc6b8f2158460175e4a1ee953f",
".git/objects/41/64ccfcafa8bdfd8f0bcad696bca3e4159aa56a": "9a9b74734c1e13047d8e431da7528be1",
".git/objects/48/c30b1d3c58ee734257d029948d45e5f54bf5fb": "ac61349c8d43501206e363ad6d2d802b",
".git/objects/1e/b2df390addca67d76f52ebc9dbd6449e75166f": "4a411b76cfd532f8362cd27f6400c79a",
".git/objects/4f/c90aaff838bfb95d995c317b2473a240fa5661": "922a2f5abb5e65ed9f7851fe9afe2ba6",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/2b/7cb88d490afb9fa73a7e3922805c1ea673ca84": "f1fc6b6e09a3a66d6ab2ed13c148df71",
".git/objects/2b/d40f8da95dfec1438a4f3eb992e22cfb2a30c4": "511b927d8152d7e869132360985cc628",
".git/objects/13/5ee59e9b20dad2be05a07c9964edcd76239bbf": "f223e3ec5dbd078f6cfc6360ace77c5b",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4b8ed88af7e69d3b205cb05f3deeb2e0",
".git/logs/refs/heads/main": "50b69b1b9e658dee5cc21310457ec6ca",
".git/logs/refs/remotes/origin/main": "9edfddffccc70d6ff3cbca1851d25d0c",
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
".git/refs/heads/main": "11eaa097fd81e753c343c678b0be7458",
".git/refs/remotes/origin/main": "11eaa097fd81e753c343c678b0be7458",
".git/index": "80f9bb578fd0924de09220d7aa7edf42",
".git/COMMIT_EDITMSG": "74581bb4282f7d65f649ab1fa9a118cc",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
"assets/AssetManifest.json": "ec15e6317c99b6cf83f97e854ec0e46e",
"assets/NOTICES": "88be5973d7fcaf21fc52691178474d9b",
"assets/FontManifest.json": "064e40316803472112ca99267e37b556",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "8c276c9e194d11320b0d2f81dd14a186",
"assets/fonts/MaterialIcons-Regular.otf": "62ec8220af1fb03e1c20cfa38781e17e",
"assets/assets/images/8.JPG": "1e489a4631abf936c35bd7e16ac17f23",
"assets/assets/images/9.JPG": "8677d876af21f31ef3ec6c287505236a",
"assets/assets/images/divider.png": "7205dd52e4d815dd8e5f850153a5a9b1",
"assets/assets/images/12.JPG": "95eb125d332c23b3f1673479fc239f22",
"assets/assets/images/11.JPG": "fea000bc6235728fab468a440c64791c",
"assets/assets/images/hand.png": "05cff39c7ce7f9c2c4435bc2813ef0a8",
"assets/assets/images/10.JPG": "c23dce663628dba0c77f183643b33da8",
"assets/assets/images/flower.png": "a0625209370fc0a59c8846cdd777680e",
"assets/assets/images/4.JPG": "187ec627ce2c71fb3624ba2d2a69fb19",
"assets/assets/images/5.JPG": "90fd949fecb840d6fb2b084d0f1dd611",
"assets/assets/images/7.JPG": "20d4583c512f12ea2012e0f1a3f97e31",
"assets/assets/images/6.JPG": "fe064aa5f21835077eef4565fa3a2363",
"assets/assets/images/2.JPG": "4a33b561348e73a5109462c3b25fcebb",
"assets/assets/images/3.JPG": "f03c29d0568eca4e2164370cb76d34c2",
"assets/assets/images/1.JPG": "046c89f8c73755a645ddbbaff9771b1f",
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
