export function Contents() {
    const $contents = document.createElement("section");
    $contents.id = "contents";

    if (!location.hash.includes("#/search")) {
        $contents.classList.add("grid-fluid")        
    }
    
    return $contents;    
} 