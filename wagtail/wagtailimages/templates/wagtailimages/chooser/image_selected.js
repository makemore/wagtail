function(modal) {
    modal.respond('imageSelected', {{ image_json|safe }});
    modal.close();
}
