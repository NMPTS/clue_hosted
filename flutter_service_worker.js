'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "c4e95bbe19add85dba9affc69532fe26",
"assets/AssetManifest.bin.json": "a54ba1bf34c9c69b81a7cbd060bde9e2",
"assets/AssetManifest.json": "f9c14af72972a4a791e3267672081132",
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
"assets/fonts/MaterialIcons-Regular.otf": "32e987998737dca69942bdc9d2edafa2",
"assets/NOTICES": "5f7aa01d75880fbf2781fb2294011a72",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/timezone/data/latest_all.tzf": "5e6af46f7fdd153c308fc6531ba69d03",
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
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"favicon.svg": "b2e3214aef80b4c42dd224ab5ef4aba5",
"firebase-messaging-sw.js": "f742936b2fb9a3a761d6ace5da563286",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "679df79dfda6b1d33f2f7f631a2225ef",
"icons/apple-touch-icon.png": "7e6b2bd14f91dac2ae57a6c0302f9fbf",
"icons/favicon-96x96.png": "5605fb0fed63b204f18bbe784c8a5431",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/web-app-manifest-192x192.png": "058650a0e36c666e01a05ba5b954d5ea",
"icons/web-app-manifest-512x512.png": "d2de868210b72637d4ba2a2bd1ad1fa9",
"index.html": "f045ececf6eba0d1d997968562c42a57",
"/": "f045ececf6eba0d1d997968562c42a57",
"main.dart.js": "ddad86f09cb425b2b502e097151206ce",
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
