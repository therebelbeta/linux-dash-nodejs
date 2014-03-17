//Dependencies
var requirePrivate = require('require-private');

//Services

//Sub-Controllers

//Main Controller
module.exports = function(){
	return {
		samplefunc: function(){

		},
		bandwidth:function(){

		},
		df: function(){
			/*exec('df -h|awk \'{print $1","$2","$3","$4","$5","$6}\'',$result);*/
			/*return [["\/dev\/sda1","9.4G","4.6G","4.4G","52%","\/"],etc.]*/
		},
		dnsmaqLeases:function(){

		},
		hostname: function(){
			/*shell_exec('hostname')*/
			/*"thomas-mckean\n"*/
		},
		ip: function(){
			/*exec('/sbin/ifconfig |grep -B1 "inet addr" |awk \''.
         '{ if ( $1 == "inet" ) { print $2 } else if ( $2 == "Link" ) { printf "%s:",$1 } }\' |awk'.
         ' -F: \'{ print $1","$3 }\'',$result);
    
		    exec('curl http://ipecho.net/plain; echo',$result2);
		    
		    echo '[[','"external ip","',$result2[0],'"]';

		    [["external ip","208.113.219.145"],etc]*/
		},
		issue: function(){
			/*shell_exec('cat /etc/issue')*/
			/*"Debian GNU\/Linux 6.0.7 (squeeze)\n2.6.32.45-grsec-2.2.2-r3\n"*/
		},
		lastlog:function(){

			/*[["streiger","76.108.1.250","Tue Nov 19 16:34:29 -0800"],etc*/
		},
		loadavg:function(){
			/*[["48.72",609],["54.82",685],["56.13",701]]*/
		},
		mem: function(){
			/*exec('free -tmo|awk \'{print $1","$2","$3","$4}\'',$result);*/
			/*Return: ["Mem:","32186","12740","19445"]
			[mem, total, used, free]*/
		},
		netstat:function(){

		},
		numberofcores:function(){
			/*8*/
		},
		online:function(){
			/**/
		},
		ping:function(){
			/*[["gnu.org","12.337"],["github.com","0.556"],["wikipedia.org","0.366"]]*/
		},
		ps: function(){
			/*ps -aux|awk '."'{print ".'$1","$2","$3","$4","$5","$6","$7","$8","$9","$10","$11'."}'", $result);*/
			/*[["afaqtar","4855","0.6","0.0","248648","13292","?","S","10:31","0:00","php53.cgi"],etc.]*/
			/*user, pid, %cpu, %mem, VSZ, RSS, TTY, STAT, Start, Time, Command*/
		},
		speed:function(){
			/*{"upstream":845485.8580868,"downstream":25704421.900201}*/
		},
		test: function(){
			/*$milli = shell_exec('awk \'{print $1*1000}\' /proc/uptime');

				echo (int)($milli)/(1000*60*60);*/
		},
		time:function(){
			/*"Mon Mar 17 10:31:32 PDT 2014\n"*/
		},
		top: function(){

		},
		uptime: function(){
			/*echo (int) (shell_exec('cat /proc/uptime')/(60*60));*/
			/*"7 days 1 hours 28 minutes"*/
		},
		users: function(){
			/*awk -F: \'{ if ($3<=499) print "system,"$1","$6; else print "user,"$1","$6; }\' < /etc/passwd'*/
			/*[["system","daemon","\/"],etc]*/
		},
		whereis: function(){
			/*exec('whereis php mysql vim python ruby java apache2 nginx openssl vsftpd make'.
          '|awk \'{ split($1, a, ":");if (length($2)==0) print a[1]",Not Installed"; else print a[1]","$2;}\'',$result);*/
			/*[["php","Not Installed"],etc]*/
		}
	}
}