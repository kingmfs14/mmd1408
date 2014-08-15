window.onload = function(){

	var dom = {
			address: document.getElementById('street'),
			city: document.getElementById('city'),
			state: document.getElementById('state'),
			zip: document.getElementById('zip'),
			btn: document.querySelector('button')
			},
		map = L.map('map',{
			layers: MQ.mapLayer(),
			center: [20.81861,-156.334246],
			zoom: 14
			}),
		dir,
		marker = L.marker([20.81861,-156.334246]).addTo(map)
	;

	marker.bindPopup('<b>Hale O Na Kaula Church</b><br>262 Anuhea Place');

	$('#route-narrative').hide();

	dir = MQ.routing.directions().on('success', function(data){
		var legs = data.route.legs,
			html = '',
			maneuvers,
			i;

		if(legs && legs.length){
			maneuvers = legs[0].maneuvers;

			for(i=0; i<maneuvers.length; i++){
				html += (i+1) + '.';
				html += maneuvers[i].narrative + '<br/>';
			}
			L.DomUtil.get('route-narrative').innerHTML = html;
		};
	});

	function createRoute(){
		dir.route({
			locations: [
			{street: dom.address.value, city: dom.city.value, state: dom.state.value, zip: dom.zip.value},
			{street: '262 Anuhea Place', city: 'Makawao', state: 'HI', zip: '96768'}
			]
		});
		
		map.removeLayer(marker);
		$('#route-narrative').show(500);

	};
	map.locate({setView: true, maxZoom:17});

	function onLocationFound(e){
		dir.route({
			locations: [
			{latLng: {lat: e.latlng.lat, lng: e.latlng.lat}},
			{street: '262 Anuhea Place', city: 'Makawao', state: 'HI', zip: '96768'}			
			]
		});

		map.removeLayer(marker);
		$('#route-narrative').show(500);

	};

	map.addLayer(MQ.routing.routeLayer({
		directions: dir,
		fitBounds: true
	}));

    dom.zip.onkeypress = function (e){
        if (e){
            if (e.keyCode == 13 || e.which == 13) {
                dom.btn.onclick(e);
            };
        };
    };

	dom.btn.onclick = function(e){

		createRoute();
		
		dom.address.value = ''
		dom.city.value = ''
		dom.state.value = ''
		dom.zip.value = ''

		e.preventDefault();
		return false;
	};
};