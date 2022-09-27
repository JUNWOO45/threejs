// scene
const scene = new THREE.Scene();

// red cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "red" });

// mesh
const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);

// sizes
const sizes = {
  width: 800,
  height: 600,
};
// camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.x = 5;
camera.position.y = 5;
camera.position.z = 10;
scene.add(camera);

const canvas = document.querySelector(".webgl");
console.log(canvas);
// renderer
const renderer = new THREE.WebGLRenderer({
  canvas,
});

renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);