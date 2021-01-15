'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "0b69b14f149ac7753d548123662e1d08",
".git/config": "ca40a76bdd17da8744c7d779c6922919",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "06c69465c7080e9976a680d2c34e42de",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "482874e93170821c107af1affee62072",
".git/logs/refs/heads/master": "482874e93170821c107af1affee62072",
".git/objects/11/9c7e59f914ab2ff0e83a32ae3f4ecf16c71df0": "3593289705f55d172d231850d400b957",
".git/objects/13/5a3f566ef0f67f055309dc4ab65aa26ac69967": "b9e902e0488ad9c20b4e1c6698a09098",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/2a/9e6b6ab8aecdeb685037c66121341f5c40fba3": "46c8f5937175c3f5d76494b65672d334",
".git/objects/4d/47407c60ce6363a90266f992d47953a14d3b56": "793a860367f0e9114e67a962840f214f",
".git/objects/52/0db953c6a50cb40b482a03908b96404fd90b87": "01aa77d6f0f138ab73f64b2545fdaf38",
".git/objects/5c/ab0f911f7e40e0eca1beb326b692371771bfc7": "f13ac1651d3dea7713a6860abf1338b4",
".git/objects/61/c6f03e07fd5394b998f51d870bf02fdfd88140": "8e148bc0fe9fad57cff57a2f6ad954e1",
".git/objects/6a/73f53da2da2ae2490a39832e2633e858358f47": "e1ced33f13c7f785c8c191ade6219aea",
".git/objects/6e/0f24a283abdae32d5758fc3825ea29122391cc": "43cffcfeac769f74f7654b783292cc95",
".git/objects/70/29d1244e726c121b350078d86332e8e0c55896": "21ead95ec0ed06938cd7eecb85e73b58",
".git/objects/72/7d1b1c69f2f96bdbbe04fff2afb9cc0b9fa141": "d585028b6765d868b55a6aa419721820",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/a8/cc2a5639dc4fe5c76d34bdaf3b4aec294c1bb9": "97c6c4ee1e1b66e467eef6c3c81f19af",
".git/objects/b1/913b25b79b8664ac483e47d1c3a37b0fb311c8": "b700b5b27c4a339ccc6f15d99ab740cd",
".git/objects/b2/7565f857cb894f1cefb370de74fb6ac1814b29": "0b4868561b526a22dcad261127df056c",
".git/objects/b4/f7be96d16a63a08dc23a51484b4fa31a0f1fbc": "aa4c9dc7df0f2bab41a28dc5acb93c4e",
".git/objects/b6/94e1cd8fbc9cb69cc467852743c9181291baec": "62b2b612f87148f7f31b29e7ff8afff2",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/cd/3393fa093eb7e10fb0334afcba7b10e4b15e85": "c8a0e170bccb77d2a690983bded07d53",
".git/objects/dc/169958007f831572785e8d2968ae584bf7f9be": "d0aa1fa5a7b8462207e0d0d96271c945",
".git/objects/df/0d8d524384db8d1662ee4d5c6907673be19f53": "441edb686f7b843c8d612e89cde8ce20",
".git/objects/e3/3fdd96f90930ec4ecb25c252fd77c0e6d650bd": "9d30b63893f0a024011ee73db2721c38",
".git/objects/f7/86f3126ad2e3d18206bd0633f85700b182c8a3": "7b9ac10d486fadff37ea722a6bf056aa",
".git/objects/fd/24c2a4a5f1973f2b27f4d4997795d222b155c3": "a8e13aaf067c15b34050900a26da773b",
".git/objects/fe/2bfcf95c1c341704e5d266a433b006efec5617": "19c6f6427a9329c00cc6642a04660850",
".git/refs/heads/master": "9c86d87a0197ae4393b5219b5a23a702",
"assets/AssetManifest.json": "135e3ba00508ab7d576f5dc73595eb14",
"assets/FontManifest.json": "237903bcba32ec74acbda43f7ebc558c",
"assets/fonts/JosefinSans-italic-VariableFont_wght.ttf": "fd0ed435ec08aae4c87867bf3068762d",
"assets/fonts/JosefinSans-VariableFont_wght.ttf": "324a513cb9c683dc30777bdbccf59995",
"assets/fonts/Limelight-Regular.ttf": "6ccb9eb89a48d3f3b6e8d3d0e5e207aa",
"assets/fonts/MaterialIcons-Regular.otf": "a68d2a28c526b3b070aefca4bac93d25",
"assets/images/mum.JPG": "b2064650e8a2577b4eeaabfdb8b42ccc",
"assets/NOTICES": "eecb40e90cb81698bf998ebac225cc9a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "7f454f8a05f1e1a85bd8f37aa56b57aa",
"/": "7f454f8a05f1e1a85bd8f37aa56b57aa",
"main.dart.js": "09c306b4db717d143050718765f6bd5f",
"manifest.json": "d99235243843df4e9fe1a78ddf92fa41"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
    return self.skipWaiting();
  }
  if (event.message === 'downloadOffline') {
    downloadOffline();
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
  for (var resourceKey in Object.keys(RESOURCES)) {
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
