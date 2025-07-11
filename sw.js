self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open('tails-cache').then(function (cache) {
      return cache.addAll([
        'game.html',
        'spr_tails_idle_0.png',
        'spr_tails_tails_0.png',
        'spr_tails_tails_1.png',
        'spr_tails_tails_2.png',
        'spr_tails_tails_3.png',
        'spr_tails_tails_4.png',
        // Add all sprites and assets here
        'spr_tails_walk_0.png',
        'spr_tails_walk_1.png',
        'spr_tails_walk_2.png',
        'spr_tails_walk_3.png',
        'spr_tails_walk_4.png',
        'spr_tails_walk_5.png',
        'spr_tails_walk_6.png',
        'spr_tails_walk_7.png',
        'spr_tails_fly_0.png',
        'spr_tails_fly_1.png',
        // ...
        'spr_tails_jump_0.png',
        'spr_tails_jump_1.png',
        'spr_tails_jump_2.png',
        'spr_tails_tail1_0.png',
        'spr_tails_tail1_1.png',
        'spr_tails_tail1_2.png',
        'spr_tails_tail1_3.png',
        'green_hill_zone_background_by_sonicmechaomega999_d9uisrx-fullview.jpg'
      ]);
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});
