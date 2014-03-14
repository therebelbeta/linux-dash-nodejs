//Dependencies
var requirePrivate = require('require-private');

//Services

//Sub-Controllers

//Main Controller
module.exports = function(){
	return {
		samplefunc: function(){

		},
		df: function(){
			/*exec('df -h|awk \'{print $1","$2","$3","$4","$5","$6}\'',$result);*/
		},
		hostname: function(){
			/*shell_exec('hostname')*/
		},
		ip: function(){
			/*exec('/sbin/ifconfig |grep -B1 "inet addr" |awk \''.
         '{ if ( $1 == "inet" ) { print $2 } else if ( $2 == "Link" ) { printf "%s:",$1 } }\' |awk'.
         ' -F: \'{ print $1","$3 }\'',$result);
    
		    exec('curl http://ipecho.net/plain; echo',$result2);
		    
		    echo '[[','"external ip","',$result2[0],'"]';*/
		},
		issue: function(){
			/*shell_exec('cat /etc/issue')*/

		},
		mem: function(){
			/*exec('free -tmo|awk \'{print $1","$2","$3","$4}\'',$result);*/
		},
		ps: function(){
			/*ps -aux|awk '."'{print ".'$1","$2","$3","$4","$5","$6","$7","$8","$9","$10","$11'."}'", $result);*/
		},
		test: function(){
			/*$milli = shell_exec('awk \'{print $1*1000}\' /proc/uptime');

				echo (int)($milli)/(1000*60*60);*/
		},
		top: function(){

		},
		uptime: function(){
			/*echo (int) (shell_exec('cat /proc/uptime')/(60*60));*/
		},
		users: function(){
			/*awk -F: \'{ if ($3<=499) print "system,"$1","$6; else print "user,"$1","$6; }\' < /etc/passwd'*/
		},
		whereis: function(){
			/*exec('whereis php mysql vim python ruby java apache2 nginx openssl vsftpd make'.
          '|awk \'{ split($1, a, ":");if (length($2)==0) print a[1]",Not Installed"; else print a[1]","$2;}\'',$result);*/
		}
	}
}