$s1:"";
@for $i from 1 through 400 {
    $s1: $s1 + random(1000)*0.1vw + " " + random(1000)*0.1vh + " " + 0 + " " + random(50)*-0.01rem + #fff;
    @if $i < 400 {
        $s1: $s1 + ",";
    }
}