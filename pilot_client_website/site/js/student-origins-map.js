(function () {
  const mapEl = document.getElementById('student-origins-map');
  if (!mapEl) return;

  const locations = JSON.parse(mapEl.getAttribute('data-student-origins') || '[]');
  if (!locations.length) return;

  let initiated = false;

  function initMap() {
    if (initiated) return;
    initiated = true;

    const map = L.map('student-origins-map', {
      zoomControl: true,
      scrollWheelZoom: false,
      attributionControl: true
    }).setView([10, 30], 2);

    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 19
    }).addTo(map);

    const hub = locations.find(loc => loc.hub) || locations[0];
    const markers = [];

    locations.forEach(loc => {
      if (!loc.hub) {
        L.polyline([[hub.lat, hub.lng], [loc.lat, loc.lng]], {
          color: 'rgba(43,127,193,0.5)',
          weight: 1.5,
          dashArray: '6,4'
        }).addTo(map);
      }

      const icon = L.divIcon({
        className: '',
        html: loc.hub
          ? '<div class="map-pin-marker map-pin-marker--hub"><div class="map-pin-pulse"></div></div>'
          : '<div class="map-pin-marker"><div class="map-pin-pulse"></div></div>',
        iconSize: loc.hub ? [26, 26] : [20, 20],
        iconAnchor: loc.hub ? [13, 13] : [10, 10]
      });

      const marker = L.marker([loc.lat, loc.lng], { icon })
        .addTo(map)
        .bindTooltip(`<strong>${loc.country}</strong>${loc.details}`, {
          direction: 'top',
          offset: [0, loc.hub ? -14 : -10],
          className: 'map-tooltip-custom'
        });

      markers.push(marker);
    });

    const group = L.featureGroup(markers);
    map.fitBounds(group.getBounds(), { padding: [30, 30] });
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        observer.disconnect();
        initMap();
      }
    });
  }, { threshold: 0, rootMargin: '800px 0px 800px 0px' });

  observer.observe(mapEl);
})();
