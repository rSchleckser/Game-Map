let camera, renderer, scene, cube, controls, container;

const keyboard = {}
const player = { height: -4.4, speed: 0.1 }


function init() {
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x86b0f4);
    // scene.fog = new THREE.Fog(0xa0a0a0, 200, 1000);

    camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        20000
    );

    // const light = new THREE.AmbientLight(0x404040, 5); // soft white light
    // scene.add(light);

    const dlight = new THREE.PointLight(0xc4c4c4, 1.5)
    dlight.position.set(0, 300, 500);
    scene.add(dlight)

    const dlight2 = new THREE.PointLight(0xc4c4c4, 1.5)
    dlight2.position.set(500, 100, 0);
    scene.add(dlight2)

    const dlight3 = new THREE.PointLight(0xc4c4c4, 1.5)
    dlight3.position.set(0, 100, -500);
    scene.add(dlight3)

    const dlight4 = new THREE.PointLight(0xc4c4c4, 1.5)
    dlight4.position.set(-500, 300, 500);
    scene.add(dlight4)


    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.state.setBlending(THREE.NoBlending)
    renderer.state.disable(renderer.context.BLEND);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.BasicShadowMap;



    document.body.appendChild(renderer.domElement);
    // controls = new THREE.PointerLockControls(camera);

    controls = new THREE.OrbitControls(camera, renderer.domElement);
    // controls.maxPolarAngle = Math.PI / 2;


    let loader = new THREE.GLTFLoader();
    loader.load('level5/level1/scene.gltf', function(gltf) {
        gltf.scene.position.y = 10
        scene.add(gltf.scene);
    })

    // let sloader = new THREE.GLTFLoader();
    // sloader.load('Shock trooper/Shock/scene.gltf', function(gltf) {
    //     gltf.scene.castShadow = true;
    //     gltf.scene.receiveShadow = true;
    //     gltf.scene.scale.set(0.02, 0.02, 0.02)
    //     gltf.scene.position.set(-44.3, -6, 10);
    //     scene.add(gltf.scene);
    // })




    // Geometry setup
    // const geometry = new THREE.BoxGeometry(2, 2, 2);
    // const texture = new THREE.TextureLoader().load('FloorsCheckerboard_S_Diffuse.jpg')
    // const material = new THREE.MeshBasicMaterial({ map: texture });
    // cube = new THREE.Mesh(geometry, material);
    // scene.add(cube);


    // var planeGeometry = new THREE.PlaneGeometry(1000, 1000, 100, 100);
    // const texture = new THREE.TextureLoader().load('TexturesCom.jpg')
    // var planematerial = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    // var plane = new THREE.Mesh(planeGeometry, planematerial);
    // plane.position.y = 0;
    // plane.rotation.x -= Math.PI / 2;
    // scene.add(plane);


    // var mtlLoader = new THREE.MTLLoader();
    // mtlLoader.load('level5/source/Level5Niv1.mtl',
    //     function(materials) {

    //         materials.preload();
    //         var texture = new THREE.TextureLoader().load(
    //             'level5/textures/0_n4niv5a_sol.png',
    //             'level5/textures/10_n4niv5a_elemnt cuisine.png',
    //             'level5/textures/10_n4niv5a_elemnt_cuisine-EMISSION.png',
    //             'level5/textures/11_n4niv5a_machine_cyborg02-ALPHA.png',
    //             'level5/textures/11_n4niv5a_machine_cyborg02-EMISSION.png',
    //             'level5/textures/11_n4niv5a_machine_cyborg02.png',
    //             'level5/textures/12_n4niv5a_tests_cyborgs_01.png',
    //             'level5/textures/13_n4niv5a_tests_cyborgs_02.png',
    //             'level5/textures/14_n4niv5a_couloir.png',
    //             'level5/textures/1_n4niv5a_mur_beton_02-EMISSION.png',
    //             'level5/textures/2_n4niv5a_sol_usine_02-EMISSION.png',
    //             'level5/textures/2_n4niv5a_sol_usine_02.png',
    //             'level5/textures/3_n4niv5a_bureau-EMISSION.png',
    //             'level5/textures/3_n4niv5a_bureau.png',
    //             'level5/textures/4_n4niv5a_alpha-EMISSION.png',
    //             'level5/textures/4_n4niv5a_alpha.png',
    //             'level5/textures/4_n4niv5a_alphaCHANNEL.png',
    //             'level5/textures/5_n4niv5a_moquette-EMISSION.png',
    //             'level5/textures/5_n4niv5a_moquette.png',
    //             'level5/textures/6_n4niv5a_mur_usine_01.png',
    //             'level5/textures/7_n4niv5a_machine_01-EMISSION.png',
    //             'level5/textures/7_n4niv5a_machine_01.png',
    //             'level5/textures/8_n4niv5a_usine_02.png',
    //             'level5/textures/9_n4niv5a_grdsurfcyborg.png');
    //         scene.add(texture)

    //         var loader = new THREE.OBJLoader();
    //         loader.setMaterials(materials);

    //         // load a resource
    //         loader.load(
    //             // resource URL
    //             'level5/source/Level5Niv1.obj',
    //             // called when resource is loaded
    //             function(mesh) {

    //                 mesh.position.y = 10;
    //                 // mesh.rotation.x -= Math.PI / 2;
    //                 scene.add(mesh);
    //             })

    //     });




    camera.position.set(-44.3, player.height, 16)

}


// Create the display and movement
function animate() {
    requestAnimationFrame(animate);


    // meshes['gameMap1'].rotation.y += 0.01;

    // if (keyboard[87]) { //W Key
    //     camera.position.x -= Math.sin(camera.rotation.y) * player.speed;
    //     camera.position.z -= Math.cos(camera.rotation.y) * player.speed;
    // }

    // if (keyboard[83]) { //S Key
    //     camera.position.x += Math.sin(camera.rotation.y) * player.speed;
    //     camera.position.z += Math.cos(camera.rotation.y) * player.speed;
    // }

    // if (keyboard[65]) { //A Key
    //     camera.position.x += Math.sin(camera.rotation.y - Math.PI / 2) * player.speed;
    //     camera.position.z += Math.cos(camera.rotation.y - Math.PI / 2) * player.speed;
    // }

    // if (keyboard[68]) { //D Key
    //     camera.position.x += Math.sin(camera.rotation.y + Math.PI / 2) * player.speed;
    //     camera.position.z += Math.cos(camera.rotation.y + Math.PI / 2) * player.speed;
    // }

    // if (keyboard[38]) { //Up Key
    //     camera.rotation.x += Math.PI * 0.01
    // }

    // if (keyboard[40]) { //Down Key
    //     camera.rotation.x -= Math.PI * 0.01
    // }

    // if (keyboard[37]) { //Left Arrow Key
    //     camera.rotation.y += Math.PI * 0.01
    // }

    // if (keyboard[39]) { //Right Arrow Key
    //     camera.rotation.y -= Math.PI * 0.01
    // }
    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.01;
    renderer.render(scene, camera)
}


//Controls
function keyDown(event) {
    keyboard[event.keyCode] = true;
}

function keyUp(event) {
    keyboard[event.keyCode] = false;
}

window.addEventListener('keydown', keyDown);
window.addEventListener('keyup', keyUp);


//Window Resize 
function onWindowResize() {
    camera.aspect = innerWidth / innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}
window.addEventListener('resize', onWindowResize, false)


//Call back Functions
init();
animate();