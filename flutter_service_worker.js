'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "1de9e49113d97a77900df373da806447",
"assets/AssetManifest.bin.json": "1a46c9169e4b889da7da05b5e6a0066a",
"assets/AssetManifest.json": "fa0d1b4a996dda8b2f4b84b0bac8a06d",
"assets/assets/images/chat_rounded.svg": "ba178a2a2e1927473cbba6b0bac8e642",
"assets/assets/images/CLUE-1.png": "eb036cd4decdcb22b0ba7f753b7909b7",
"assets/assets/images/CLUE.png": "a7f5be95743227cead194455d8332734",
"assets/assets/images/clue_dark.png": "f254c2b44bb5075ec1f37eb212effc7e",
"assets/assets/images/clue_light.png": "92bd69ccddde3157ac98288e62143245",
"assets/assets/images/cool-background.png": "b5e56e483c3d7847d21b90062c59d7d3",
"assets/assets/images/docx_file.png": "4a94936febabe8ddfa813cf25db75dee",
"assets/assets/images/favicon.png": "1676a26f7e4a2f6ecdc2dcf2b259d53e",
"assets/assets/images/google_logo.png": "b75aecaf9e70a9b1760497e33bcd6db1",
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
"assets/assets/images/m1.png": "b1415971219fcb31703a4785263d7f39",
"assets/assets/images/m2.png": "0eb61aa8db4108cb5891acd72cb377cd",
"assets/assets/images/m3.png": "a696ae9c65912c575a80df8774866d04",
"assets/assets/images/no_data.jpg": "5edd86b9566b8c5525c47e4c15af22f8",
"assets/assets/images/pdf_file.png": "bc598ea9830c59bbfeae5e0782dce15e",
"assets/assets/images/resource_file.jpg": "1271239db97f4747590f9b9f88746b6f",
"assets/assets/images/space_bg.webp": "0d42447c62788c5fc389287610429d42",
"assets/assets/images/splash.gif": "015580fd8dd36786e9acf85fe40b32fa",
"assets/assets/images/splash_dark.gif": "f46e9b10b387edf49d89b1dac8c114c8",
"assets/assets/images/student-guide/adding_credits_1.png": "c409f5b43e0b74a337d4717b590a7455",
"assets/assets/images/student-guide/adding_credits_2.png": "c58823bff30105175f6673e677724501",
"assets/assets/images/student-guide/explore.png": "f78d381dea10e9bfcadf3f226d32f7ba",
"assets/assets/images/student-guide/registering-for-sessions-1.png": "615901aa1d8cb7fd04c5605c733adaab",
"assets/assets/images/student-guide/registering-for-sessions-2.png": "8ee7ac1c518139b7b804c918f8f8a5ea",
"assets/assets/images/student-guide/registering-for-sessions-3.png": "c2e6c51012766b24fafa5c447cb4cb28",
"assets/assets/images/student-guide/registering-for-sessions-4.png": "a943d7fc52ae6b0b5b26ba104b9c1402",
"assets/assets/images/student-guide/request_session_1.png": "b0c4b8df3f140c27b5ea9190b54809fe",
"assets/assets/images/student-guide/request_session_2.png": "4dfef64d3de140cb89e2b8bf39056d3e",
"assets/assets/images/student-guide/request_session_3.png": "ed21bc525d446a86bb68930ab72ecb3d",
"assets/assets/images/student-guide/request_session_4.png": "ea7527e9ccb0e54a2323a0a9977e78bf",
"assets/assets/images/student-guide/request_session_5.png": "e8612b47bf281f51fa5bd9898b0c0b0d",
"assets/assets/images/student-guide/request_session_6.png": "ac068fa49217654226e7c4f39a1d28fc",
"assets/assets/images/teacher-guide/charging-for-classes-1.png": "e89106e8a15a25305fa39981333ea408",
"assets/assets/images/teacher-guide/charging-for-classes-2.png": "3b9a9be2e04b97eac019d05085319c9c",
"assets/assets/images/teacher-guide/create-new-session-1.png": "f10af4eb843b34418a9c1198a4c0bec9",
"assets/assets/images/teacher-guide/create-new-session-2.png": "f6bac14bec255e7f1daf37960fe9d996",
"assets/assets/images/teacher-guide/create-new-session-3.png": "d72182d4f31517e3461072c1f02a81a2",
"assets/assets/images/teacher-guide/custom_credits_1.png": "4ab0527e3e06074f959a2eeaf5ac3820",
"assets/assets/images/teacher-guide/custom_credits_2.png": "c8ff4f9cbf02e598a3df8a5f02c1545b",
"assets/assets/images/teacher-guide/custom_credits_3.png": "ce871c5f3b59dcb3436282452ea6fa6c",
"assets/assets/images/teacher-guide/custom_credits_4.png": "a5ff232ee7ff866db7025ccfe05d44e8",
"assets/assets/images/teacher-guide/custom_credits_5.png": "533e74f7056da8d36cf1d52b720e9fe0",
"assets/assets/images/teacher-guide/getting-paid-1.png": "a405ad5d1a92b4860b4c84f1aaf55810",
"assets/assets/images/teacher-guide/operational_efficiency_1.png": "a9b0ac099c507eaa463c176f34073469",
"assets/assets/images/transaction.jpg": "7b74cf3f474193de745b18afc355e6f0",
"assets/assets/images/unknown_file.png": "864ea0d6ca1668424847b7321f449b37",
"assets/assets/images/zip_file.png": "436c34913f0fadb030c28ff8e0cb9f74",
"assets/assets/lottie/chat_rounded.svg": "ba178a2a2e1927473cbba6b0bac8e642",
"assets/assets/lottie/error.json": "041c6a4958f0e3206c32c668331aeedc",
"assets/assets/lottie/folder.svg": "a15ee0c426b33503db223bd1f7350d26",
"assets/assets/lottie/loading.json": "fbf8da3d6b7b1ec42c001d1257455310",
"assets/assets/lottie/messageLoad.json": "3ceb577aa58fdb646708e8c6babe4a2c",
"assets/assets/lottie/scroll.json": "805bb6087234838ec219459dadbb4002",
"assets/assets/lottie/success.json": "e1bb1741df24cd6b3433f4081d09c2f9",
"assets/assets/lottie/success_loading.json": "21fcc4ab65e33b3476db11de920590c8",
"assets/assets/videos/card_1.gif": "d1b6ec0033858fa09061bc6e4d7ab1fe",
"assets/assets/videos/card_2.gif": "28ef0bf8c87af81d535613a9e6e5cd56",
"assets/assets/videos/card_3.gif": "ae7530f5dc33fbef03c1f1b695e147e2",
"assets/assets/videos/landing.mp4": "d1dd27493b7b135e32f8194adc96b0b9",
"assets/assets/videos/landing.png": "6414e454fe63e774fa8ce8e3fb8afdd8",
"assets/assets/videos/landing_lottie_1.json": "078419da494877a1752b36ef37b55084",
"assets/assets/videos/login.mp4": "5dffdf9fc54a1b4d9675aeab51792b18",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "2f780bc347761f64857bbc5c0a47423d",
"assets/NOTICES": "c0e2e09ef7fae41daa62d178ee1aa55b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "6cce90cd4f01e209b4b964376a30a704",
"firebase-messaging-sw.js": "f742936b2fb9a3a761d6ace5da563286",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "f35e6c2ae9e024aec9a55d34717291ab",
"icons/Icon-192.png": "b416f65d4dfc3656586b8ae6a31b89ac",
"icons/Icon-512.png": "fd90889a6d5611ce9a0ac6448d61aea9",
"icons/Icon-maskable-192.png": "b416f65d4dfc3656586b8ae6a31b89ac",
"icons/Icon-maskable-512.png": "fd90889a6d5611ce9a0ac6448d61aea9",
"index.html": "a1f146546758b86d01094a75a5b242b3",
"/": "a1f146546758b86d01094a75a5b242b3",
"main.dart.js": "85ae1b84a85072a1f1f030a940837718",
"manifest.json": "5558b68b9996e3afb36c9083afbddb62",
"splash/img/dark-1x.gif": "203276fd8f1be5c7089fd8aef8cd1c13",
"splash/img/dark-1x.png": "c110fa3cfcdfa858709dcdde952f59be",
"splash/img/dark-2x.gif": "df55803100986cae9aa48761f9247e9a",
"splash/img/dark-2x.png": "39b744961196f1900cd8f3d33d93f0eb",
"splash/img/dark-3x.gif": "6b87f58f3f98cab5db152556630a2587",
"splash/img/dark-3x.png": "170ee8429353109b9b7e2bb374c8c37f",
"splash/img/dark-4x.gif": "459a22f2155c49637226733800627904",
"splash/img/dark-4x.png": "9510e1625cc0eb735babf3a0798bffa2",
"splash/img/light-1x.gif": "342408bf83d5e38c4e56558e3a485c52",
"splash/img/light-1x.png": "f1ff220f213acbfb81da7c6c4f47535a",
"splash/img/light-2x.gif": "8446474ceb5f93b0844de088e2bb92cb",
"splash/img/light-2x.png": "5c0da27a0269724f3bdebe230d48594b",
"splash/img/light-3x.gif": "0ba7414948c2415056556a0eb5d548f7",
"splash/img/light-3x.png": "b9386d3a7e88c0a87409d8a6acb28c52",
"splash/img/light-4x.gif": "b64fbaa0e57bd638712946280b31236d",
"splash/img/light-4x.png": "b0ecde75c4b0f0a2f4a296e619c1ceb8",
"splash/img/light-background.gif": "0de181efede19bedab0b0f4bb1ced95b",
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
