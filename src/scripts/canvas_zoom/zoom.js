$(function() {
    const canvas = document.getElementById('canvas');
    const width = canvas.width;
    const height = canvas.height;
    
    $('#1x').click(function() {
        $('#canvas').animate({
            'width': width + 'px',
            'height': height + 'px',
        });
    });
    
    $('#2x').click(function() {
        $('#canvas').animate({
            'width': 2 * width + 'px',
            'height': 2 * height + 'px',
        });
    });

    $('#3x').click(function() {
        $('#canvas').animate({
            'width': 3 * width + 'px',
            'height': 3 * height + 'px',
        });
    });

    $('#4x').click(function() {
        $('#canvas').animate({
            'width': 4 * width + 'px',
            'height': 4 * height + 'px',
        })
    });
});
