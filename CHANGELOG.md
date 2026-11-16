# Changelog - XN: STREETS UNLEASHED

## Implemented
**Graphics**
- Low / Medium / High / Ultra graphics, FPS counter (toggle)
- PBR clear-coat car paint + metallic glass with environment reflections (dim at night)
- Day/night, sunrise/sunset, fog, rain, wet-road shine, "Always day" option
- Lit windows at night, glowing streetlights, neon strips on buildings (night), crosswalk markings at every intersection
- Contact-shadow blobs under every vehicle and around building bases (fake ambient occlusion)
- Camera shake on crashes / very high speed; black-red-metal UI theme, loading bar

**Vehicles**
- 12 cars (incl. XN HyperSonic 400 km/h with exhaust flames above 350 km/h) + 5 bikes with leaning
- Interiors (dashboard, seats, steering wheel) + COCKPIT camera (V key / eye button / menu) with rear-view camera window
- Real mesh dents on the car body in crashes (front/back crumple), repaired at gas stations; engine smoke at low health
- Tyre smoke, skid marks, indicators (Z/X), brake lights, horn, suspension pitch/roll, wheel spin + steering
- Tachometer + gear, engine/handling upgrades, repaint, per-car wheel colour (all saved)
- Enter/exit animation (character walks into / out of the car)
- Any traffic car on the road can be driven; your own cars re-spawn randomly on roads

**World**
- Downtown, residential blocks, beach, mountains, airport, industrial zone, shopping mall + food court (restores HP/energy)
- Highway (ground level, 4 lanes, fast traffic) linked to the city roads
- Gas stations, custom garage canopy + paint shop, showroom, clothing shop
- Instanced buildings, distance culling, playable bounds extended

**NPC / traffic**
- Traffic lights obeyed by AI cars, cars stop for crossing pedestrians
- Pedestrians cross roads, walk sidewalks, enter/leave shops (disappear and re-appear), flee from horns, crashes and hits, some fight back
- Distant pedestrians are updated less often
- Police chase, wanted 1-5, police helicopter at 3+ stars, busted / wasted

**Gameplay**
- Missions: Delivery, Street race, Taxi job (pause-menu mission selection)
- Driving challenges: Speed 250 km/h, Drift 12 s
- Vehicle showroom: buy cars (first two owned), owned cars can be called to you from the garage
- GPS phone with waypoints, minimap, coins, hidden spots
- Unlimited HP / Energy toggles, save/load (money, owned cars, upgrades, paint, wheels, settings)

## NOT implemented (honest list)
- True map chunk loading and automatic LOD meshes (only instancing + fog/distance culling)
- Real screen-space ambient occlusion (only fake blob shadows)
- Real mirrored side mirrors (rear-view window is an un-mirrored camera); interior dials are not animated
- Elevated highways / bridges / tunnels (highway is at ground level)
- Asphalt/brick texture upgrade for roads (only markings and crosswalks)
- Ragdoll physics
