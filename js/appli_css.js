// JavaScript source code

var bdrs = function (elem) {
    var element = elem.target.id;
    
    if(element == "bdrs_hg")
    {
        bloc.style.borderTopLeftRadius = bdrs_hg.value + "%";
    }
    else if(element == "bdrs_hd")
    {
        bloc.style.borderTopRightRadius = bdrs_hd.value + "%";
    }
    else if (element == "bdrs_bg") {
        bloc.style.borderBottomLeftRadius = bdrs_bg.value + "%";
    }
    else if (element == "bdrs_bd") {
        bloc.style.borderBottomRightRadius = bdrs_bd.value + "%";
    }
}

var bs=function()
{
    bloc.style.boxShadow = bs_a.value + "px " + bs_o.value + "px " + bs_flou.value + "px " + bs_dist.value + "px " + bs_col.value;
    bloc.style.MozBoxShadow = bs_a.value + "px " + bs_o.value + "px " + bs_flou.value + "px " + bs_dist.value + "px " + bs_col.value;
    bloc.style.WebkitBoxShadow = bs_a.value + "px " + bs_o.value + "px " + bs_flou.value + "px " + bs_dist.value + "px " + bs_col.value;
    bloc.style.MsBoxShadow = bs_a.value + "px " + bs_o.value + "px " + bs_flou.value + "px " + bs_dist.value + "px " + bs_col.value;
    bloc.style.OBoxShadow = bs_a.value + "px " + bs_o.value + "px " + bs_flou.value + "px " + bs_dist.value + "px " + bs_col.value;

}

var deg=function()
{
    if (deg_type.value == "linear")
    {
        var gradient = deg_type.value + "-gradient(" + deg_deg.value + "deg," + deg_col1.value + "," + deg_col2.value + ")";
    }
    else
    {
        var gradient = deg_type.value + "-gradient(" + deg_col1.value + "," + deg_col2.value + ")";
    }
    
    bloc.style.backgroundImage = "-webkit-" + gradient;
    bloc.style.backgroundImage = "-moz-" + gradient;
    bloc.style.backgroundImage = "-ms-" + gradient;
    bloc.style.backgroundImage = "-o-" + gradient;
    bloc.style.backgroundImage = gradient;
}

var rotate=function()
{
    if (rotate_deg.value == "")
    {
        bloc.style.transform = "rotate(0deg)";
    }
    else
    {
        bloc.style.transform = "rotate(" + rotate_deg.value + "deg)";
    }
    
}

var bdrs_hg = document.getElementById('bdrs_hg');
var bdrs_bg = document.getElementById('bdrs_bg');
var bdrs_hd = document.getElementById('bdrs_hd');
var bdrs_bd = document.getElementById('bdrs_bd');

var bs_a = document.getElementById('bs_a');
var bs_o = document.getElementById('bs_o');
var bs_flou = document.getElementById('bs_flou');
var bs_dist = document.getElementById('bs_dist');
var bs_col = document.getElementById('bs_col');

var deg_deg = document.getElementById('deg_deg');
var deg_col1 = document.getElementById('deg_col1');
var deg_col2 = document.getElementById('deg_col2');
var deg_type = document.getElementById('deg_type');

var rotate_deg = document.getElementById('rotate_deg');

var bloc = document.getElementById('modif');

bdrs_hg.addEventListener('keyup', bdrs, false);
bdrs_hg.addEventListener('mouseup', bdrs, false);
bdrs_bg.addEventListener('keyup', bdrs, false);
bdrs_bg.addEventListener('mouseup', bdrs, false);
bdrs_hd.addEventListener('keyup', bdrs, false);
bdrs_hd.addEventListener('mouseup', bdrs, false);
bdrs_bd.addEventListener('keyup', bdrs, false);
bdrs_bd.addEventListener('mouseup', bdrs, false);

bs_a.addEventListener('keyup', bs, false);
bs_a.addEventListener('mouseup', bs, false);
bs_o.addEventListener('keyup', bs, false);
bs_o.addEventListener('mouseup', bs, false);
bs_flou.addEventListener('keyup', bs, false);
bs_flou.addEventListener('mouseup', bs, false);
bs_dist.addEventListener('keyup', bs, false);
bs_dist.addEventListener('mouseup', bs, false);
bs_col.addEventListener('change', bs, false);

deg_deg.addEventListener('keyup', deg, false);
deg_deg.addEventListener('mouseup', deg, false);
deg_col1.addEventListener('change', deg, false);
deg_col2.addEventListener('change', deg, false);
deg_type.addEventListener('change', deg, false);

rotate_deg.addEventListener('keyup', rotate, false);
rotate_deg.addEventListener('mouseup', rotate, false);