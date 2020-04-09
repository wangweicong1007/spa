$(function(){
    //get dom elem
    var $width = $('#width'),
        $height = $('#height'),
        $button = $('#calculate'),
        $perimeter = $('#perimeter'),
        $area = $('#area');
    /*calc button click event */
    $button.click(function(){
        if(!validate('#width') || !validate('#height')) return;
        //get value
        var w = Number($width.val()),
            h = Number($height.val());
        console.log(w,h);
        //calculate
        var p = 2 * (w + h);
        p = Math.round(p * Math.pow(10,2)) / Math.pow(10,2);
        var a = w * h;
        a = Math.round(a * Math.pow(10,2)) / Math.pow(10,2);
        //output
        $perimeter.val(p);
        $area.val(a);
    });

    function validate(field){
        //get DOM error message
        var $data = $(field),
            $msg = $(field + '-validation-message');

        //validate null
        if($data.val() === ''){
            $msg.html('不能为空！');
            $data.select();
            return false;
        }

        //validate number
        if(!/^-?(0![1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/.test($data.val())){

        }

        //validate > 0
        if(Number($data.val()) <= 0){
            
        }

        $msg.html('');
        return true;
    }
})