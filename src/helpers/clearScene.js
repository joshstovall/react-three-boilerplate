export async function clearScene (scene){

    for( var i = scene.children.length - 1; i >= 0; i--) { 
        const obj = scene.children[i];
        scene.remove(obj); 
   }
}