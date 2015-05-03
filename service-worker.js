var self = self;
self.onfetch = function(event) {
  event.respondWith(new Response('hello'));
};
