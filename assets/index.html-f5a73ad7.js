import{_ as e,q as i,E as n,a8 as s}from"./framework-0d6fe705.js";const l={},a=s(`<h1 id="extended-lifecycle-support-for-languages" tabindex="-1"><a class="header-anchor" href="#extended-lifecycle-support-for-languages" aria-hidden="true">#</a> Extended Lifecycle Support for Languages</h1><h2 id="extended-lifecycle-support-for-php" tabindex="-1"><a class="header-anchor" href="#extended-lifecycle-support-for-php" aria-hidden="true">#</a> Extended Lifecycle Support for PHP</h2><p>Extended Lifecycle Support (ELS) for PHP from TuxCare provides security fixes for PHP versions that have reached their end-of-life. This allows to continue running Linux server vulnerability-free.</p><h3 id="supported-os" tabindex="-1"><a class="header-anchor" href="#supported-os" aria-hidden="true">#</a> Supported OS</h3><p>TuxCare provides Extended Lifecycle Support through four years after the EOL date.</p><table><thead><tr><th style="text-align:center;">OS</th><th style="text-align:center;">Version</th></tr></thead><tbody><tr><td style="text-align:center;">CentOS, CloudLinux, OracleLinux, etc.</td><td style="text-align:center;">6.x 64-bit, 7.x 64-bit, 8.x 64-bit, 9.x 64-bit</td></tr><tr><td style="text-align:center;">AlmaLinux</td><td style="text-align:center;">8.x 64-bit, 9.x 64-bit</td></tr><tr><td style="text-align:center;">Ubuntu</td><td style="text-align:center;">16.04 64-bit, 18.04 64-bit, 20.04 64-bit, 22.04 64-bit</td></tr></tbody></table><h3 id="supported-versions" tabindex="-1"><a class="header-anchor" href="#supported-versions" aria-hidden="true">#</a> Supported versions</h3><p><strong>CentOS, CloudLinux, AlmaLinux, Oracle Linux, etc.:</strong> 5.1, 5.2, 5.3, 5.4, 5.5, 5.6, 7.0, 7.1, 7.2, 7.3, 7.4, 8.0, 8.1, 8.2</p><p><strong>Ubuntu:</strong> 5.6, 7.0, 7.1, 7.2, 7.3, 7.4, 8.0, 8.1, 8.2</p><h3 id="installation-instructions-of-yum-repositories" tabindex="-1"><a class="header-anchor" href="#installation-instructions-of-yum-repositories" aria-hidden="true">#</a> Installation instructions of yum repositories</h3><h4 id="rhel-based-systems" tabindex="-1"><a class="header-anchor" href="#rhel-based-systems" aria-hidden="true">#</a> RHEL based systems</h4><ol><li>Download an installer script:</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>wget https://repo.cloudlinux.com/php-els/install-php-els-repo.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>Run the installer script with keys. The installation script registers the server in the CLN with the key, adds the yum repository, and adds a PGP key to the server.</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sh install-php-els-repo.sh --license-key XXX-XXXXXXXXXXXX
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>Verify that the installation was successful.</li></ol><p>To ensure the installation has been completed successfully, run the following command. It should return the info about an available package. If information about the package will be available, it would mean that installation was successful. After that, updates will be available for installation from the repository using the usual yum upgrade command.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yum info alt-php73

Available Packages
Name        : alt-php73
Arch        : x86_64
Epoch       : 1
Version     : 7.3.33
Release     : 5.2.el7
Size        : 22 k
Repo        : php-els/7
Summary     : PHP scripting language for creating dynamic web sites
URL         : http://www.php.net/
License     : PHP and LGPLv2 and LGPLv2+
Description : PHP is an HTML-embedded scripting language.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>How to install packages:</strong></p><ul><li>Each version of PHP individually or all versions at once can be installed.</li><li>Standard commands to install each version separately can be used. For example, installing alt-php73:</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yum install alt-php73*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>To install all versions at the same time, use group:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yum groupinstall alt-php
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="ubuntu" tabindex="-1"><a class="header-anchor" href="#ubuntu" aria-hidden="true">#</a> Ubuntu</h4><p>Download an installer script:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>wget https://repo.cloudlinux.com/php-els/install-php-els-ubuntu-repo.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Run the installer script with keys:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>bash install-php-els-ubuntu-repo.sh --license-key XXX-XXXXXXXXXXXX
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>To ensure the installation has been completed successfully, run the following command. It should return the info about an available package. If information about the package will be available, it would mean that installation was successful. After that, updates will be available for installation from the repository using the usual apt upgrade command.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>apt-cache show alt-php73-cli

Package: alt-php73-cli
Source: php
Version: 7.3.18-1
Architecture: amd64
Maintainer: Sergey Fokin &lt;sfokin@cloudlinux.com&gt;
Installed-Size: 51694
Depends: libbz2-1.0, libc6 (&gt;= 2.14), libcurl3 (&gt;= 7.44.0), libgmp10, libreadline6 (&gt;= 6.0), libssl1.0.0 (&gt;= 1.0.2~beta3), libsystemd0, libxml2 (&gt;= 2.9.0), zlib1g (&gt;= 1:1.1.4), alt-php73-common (= 7.3.18-1), libcurl4-openssl-dev, libnghttp2-14
Homepage: http://www.php.net/
Priority: optional
Section: libs
Filename: pool/main/p/php/alt-php73-cli_7.3.18-1_amd64.deb
Size: 10247916
SHA256: 6f107e60684695b6261871a5540c4742eb6e86befe767ab313d1eacda023e5bb
SHA1: e8e7d6ab06470cbda5f5ef65a48c7c527ff52e9b
MD5sum: d6c664d4f4b229c1e6727804888f6079
Description: command-line interpreter for the PHP scripting language.
Description-md5: 0d83f7bf7177d3376a59b73890c8494d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>How to install packages:</strong></p><ul><li>Each version of PHP individually or all versions at once can be installed.</li><li>Standard commands to install each version separately can be used. For example, installing alt-php73:</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>apt-get install alt-php73*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>To install all versions at the same time, it is necessary to use the alt-php meta-package:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>apt-get install alt-php
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="installation-instructions-of-a-local-mirror" tabindex="-1"><a class="header-anchor" href="#installation-instructions-of-a-local-mirror" aria-hidden="true">#</a> Installation instructions of a local mirror</h3><p>We provide the ability to create local mirrors of PHP for ELS updates.</p><p>To obtain the access to the local mirroring, provide your External IP address to your Account Manager or send it to <a href="mailto:sales@tuxcare.com">sales@tuxcare.com</a>.</p><p>To create a local mirror of the repository with security updates via <code>rsync</code>, use the following:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>rsync://repo.cloudlinux.com/PHP_ELS/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Example of creating a local mirror for all supported OS versions:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>rsync -avSHP --delete rsync://repo.cloudlinux.com/PHP_ELS/ .
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Example of creating a local mirror for a specific OS version:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>rsync -avSHP --delete rsync://repo.cloudlinux.com/PHP_ELS/el6/ .
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Use one of the suggested options to specify the OS:</p><table><thead><tr><th style="text-align:center;">Option</th><th style="text-align:center;">OS</th></tr></thead><tbody><tr><td style="text-align:center;">el6</td><td style="text-align:center;">CentOS 6, CloudLinux 6, OracleLinux 6, etc.</td></tr><tr><td style="text-align:center;">el7</td><td style="text-align:center;">CentOS 6, CloudLinux 6, OracleLinux 6, etc.</td></tr><tr><td style="text-align:center;">el8</td><td style="text-align:center;">AlmaLinux 8, CentOS 8 Stream, CloudLinux 8.</td></tr><tr><td style="text-align:center;">el9</td><td style="text-align:center;">AlmaLinux 9, CentOS 9 Stream, CloudLinux 9</td></tr><tr><td style="text-align:center;">ubuntu16.04</td><td style="text-align:center;">Ubuntu 16.04</td></tr><tr><td style="text-align:center;">ubuntu18.04</td><td style="text-align:center;">Ubuntu 18.04</td></tr><tr><td style="text-align:center;">ubuntu20.04</td><td style="text-align:center;">Ubuntu 20.04</td></tr><tr><td style="text-align:center;">ubuntu22.04</td><td style="text-align:center;">Ubuntu 22.04</td></tr></tbody></table><h3 id="oval-data" tabindex="-1"><a class="header-anchor" href="#oval-data" aria-hidden="true">#</a> OVAL data</h3><h4 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h4><p>This section contains information about available ELS for PHP OVAL streams that can be used for partner application integration.</p><p>Currently, we provide OVAL data for the following OS versions:</p><ul><li>EL 6 (CentOS, CloudLinux, OracleLinux, etc.)</li><li>EL 7 (CentOS, CloudLinux, OracleLinux, etc.)</li><li>EL 8 (AlmaLinux, CentOS, CloudLinux, OracleLinux, etc.)</li><li>EL 9 (AlmaLinux, CentOS, CloudLinux, etc.)</li><li>Ubuntu 16.04</li><li>Ubuntu 18.04</li><li>Ubuntu 20.04</li><li>Ubuntu 22.04</li></ul><h4 id="tuxcare-php-els-oval-streams" tabindex="-1"><a class="header-anchor" href="#tuxcare-php-els-oval-streams" aria-hidden="true">#</a> TuxCare PHP ELS OVAL Streams</h4><ul><li>EL 6: <a href="https://repo.cloudlinux.com/php-els/centos6-els-php-oval.xml" target="_blank" rel="noopener noreferrer">https://repo.cloudlinux.com/php-els/centos6-els-php-oval.xml</a></li><li>EL 7: <a href="https://repo.cloudlinux.com/php-els/centos7-els-php-oval.xml" target="_blank" rel="noopener noreferrer">https://repo.cloudlinux.com/php-els/centos7-els-php-oval.xml</a></li><li>EL 8: <a href="https://repo.cloudlinux.com/php-els/centos8-els-php-oval.xml" target="_blank" rel="noopener noreferrer">https://repo.cloudlinux.com/php-els/centos8-els-php-oval.xml</a></li><li>EL 9: <a href="https://repo.cloudlinux.com/php-els/centos9-els-php-oval.xml" target="_blank" rel="noopener noreferrer">https://repo.cloudlinux.com/php-els/centos9-els-php-oval.xml</a></li><li>Ubuntu 16.04: <a href="https://repo.cloudlinux.com/php-els/ubuntu16.04-els-php-oval.xml" target="_blank" rel="noopener noreferrer">https://repo.cloudlinux.com/php-els/ubuntu16.04-els-php-oval.xml</a></li><li>Ubuntu 18.04: <a href="https://repo.cloudlinux.com/php-els/ubuntu18.04-els-php-oval.xml" target="_blank" rel="noopener noreferrer">https://repo.cloudlinux.com/php-els/ubuntu18.04-els-php-oval.xml</a></li><li>Ubuntu 20.04: <a href="https://repo.cloudlinux.com/php-els/ubuntu20.04-els-php-oval.xml" target="_blank" rel="noopener noreferrer">https://repo.cloudlinux.com/php-els/ubuntu20.04-els-php-oval.xml</a></li><li>Ubuntu 22.04: <a href="https://repo.cloudlinux.com/php-els/ubuntu22.04-els-php-oval.xml" target="_blank" rel="noopener noreferrer">https://repo.cloudlinux.com/php-els/ubuntu22.04-els-php-oval.xml</a></li></ul><h4 id="how-to-use-oval" tabindex="-1"><a class="header-anchor" href="#how-to-use-oval" aria-hidden="true">#</a> How to use OVAL</h4><ol><li>Install OpenSCAP <ul><li>for rpm systems:</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum install openscap openscap-utils scap-security-guide -y
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>for deb systems:</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>apt-get install libopenscap8 -y
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li>Download OVAL stream:</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>wget https://repo.cloudlinux.com/php-els/centos6-els-php-oval.xml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>Run scanning:</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>oscap oval eval --results result.xml --report report.xml centos6-els-php-oval.xml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="php-extensions-list" tabindex="-1"><a class="header-anchor" href="#php-extensions-list" aria-hidden="true">#</a> PHP extensions list</h3><p>You can find the list of the supported add-ons <a href="https://docs.cloudlinux.com/cloudlinux_os_components/#bundled-php-extensions" target="_blank" rel="noopener noreferrer">here</a>.</p><h3 id="how-to-use-php-els" tabindex="-1"><a class="header-anchor" href="#how-to-use-php-els" aria-hidden="true">#</a> How to use PHP-ELS</h3><p>When you deploy an updated version of PHP through PHP ELS, using your system’s regular update tool (yum, dnf, apt), the new version will be installed under <code>/opt/alt/php[version]/</code>. This means that all modules, configurations and additional files pertaining to this version will be contained inside that path. Different versions of PHP will each have their own path and can coexist without issues on the same system. Below you will find the location of all the relevant files, should you want to make any changes.</p><p><strong>The <em>bin</em> files:</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>[root@localhost ~]# ll /opt/alt/phpXY/usr/bin/
bytekit          hphpa            pear             pecl             phar.phar        phpcb            php-config       phpcpd           phploc           phpunit-skelgen
dbunit           lsphp            peardev          phar             php              php-cgi          phpcov           phpize           phpunit          ppw
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><em>Modules</em> and <em>pecl</em> extensions:</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>ls /opt/alt/phpXY/usr/lib64/php/modules/
ZendGuardLoader.so  imagick.so         oci8.so          stem.so
amqp.so             imap.so            odbc.so          stomp.so
apc.so              inclued.so         opcache.so       suhosin.so
apcu.so             inotify.so         pdf.so           sybase_ct.so
apm.so              interbase.so       pdo.so           sysvmsg.so
ares.so             intl.so            pdo_dblib.so     sysvsem.so
bcmath.so           ioncube_loader.so  pdo_firebird.so  sysvshm.so
big_int.so          ixed.5.4.lin       pdo_mysql.so     tideways.so
bitset.so           jsmin.so           pdo_oci.so       tidy.so
brotli.so           json.so            pdo_odbc.so      timezonedb.so
bz2_filter.so       ldap.so            pdo_pgsql.so     trader.so
dba.so              libevent.so        pdo_sqlite.so    translit.so
dbase.so            libsodium.so       pgsql.so         uploadprogress.so
dbx.so              luasandbox.so      phalcon.so       uri_template.so
dom.so              lzf.so             phar.so          uuid.so
doublemetaphone.so  mailparse.so       posix.so         wddx.so
eaccelerator.so     mbstring.so        propro.so        weakref.so
eio.so              mcrypt.so          pspell.so        xcache.so
enchant.so          memcache.so        quickhash.so     xcache_3.so
fileinfo.so         memcached.so       radius.so        xdebug.so
functional.so       mongo.so           raphf.so         xhprof.so
gd.so               mongodb.so         rar.so           xmlreader.so
gender.so           msgpack.so         recode.so        xmlrpc.so
geoip.so            mssql.so           redis.so         xmlwriter.so
geos.so             mysql.so           rsync.so         xrange.so
gmagick.so          mysqli.so          snmp.so          xsl.so
gnupg.so            mysqlnd.so         soap.so          yaf.so
haru.so             ncurses.so         sockets.so       yaml.so
hidef.so            nd_mysql.so        solr.so          yaz.so
htscanner.so        nd_mysqli.so       spl_types.so     zip.so
http.so             nd_pdo_mysql.so    ssh2.so          zmq.so
igbinary.so         oauth.so           stats.so
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Running code on a specific version through the CLI:</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>[root@localhost ~]# /opt/alt/phpXY/usr/bin/php helloworld.php
Hello, World!
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Location of <em>ini</em> config files:</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>[root@localhost ~]# ls /opt/alt/phpXY/etc/php.d.all/
40-leveldb.ini        mailparse.ini     redis.ini
40-snuffleupagus.ini  mbstring.ini      rrd.ini
40-vld.ini            mcrypt.ini        snmp.ini
amqp.ini              memcache.ini      snuffleupagus-default.rules
apcu.ini              memcached.ini     soap.ini
bcmath.ini            mongodb.ini       sockets.ini
dba.ini               mysqli.ini        sodium.ini
dbase.ini             mysqlnd.ini       solr.ini
dom.ini               nd_mysqli.ini     sourceguardian.ini
eio.ini               nd_pdo_mysql.ini  sqlsrv.ini
enchant.ini           newrelic.ini      ssh2.ini
ffmpeg.ini            oauth.ini         stats.ini
fileinfo.ini          oci8.ini          swoole.ini
gd.ini                odbc.ini          sysvmsg.ini
gearman.ini           opcache.ini       sysvsem.ini
gender.ini            pdf.ini           sysvshm.ini
geoip.ini             pdo.ini           tideways_xhprof.ini
geos.ini              pdo_dblib.ini     tidy.ini
gmagick.ini           pdo_firebird.ini  timezonedb.ini
gnupg.ini             pdo_mysql.ini     trader.ini
grpc.ini              pdo_oci.ini       uploadprogress.ini
http.ini              pdo_odbc.ini      uuid.ini
igbinary.ini          pdo_pgsql.ini     vips.ini
imagick.ini           pdo_sqlite.ini    xdebug.ini
imap.ini              pdo_sqlsrv.ini    xmlreader.ini
inotify.ini           pgsql.ini         xmlrpc.ini
intl.ini              phalcon4.ini      xmlwriter.ini
ioncube_loader.ini    phar.ini          xsl.ini
jsmin.ini             posix.ini         yaml.ini
json.ini              propro.ini        yaz.ini
ldap.ini              pspell.ini        zip.ini
luasandbox.ini        psr.ini           zmq.ini
lzf.ini               raphf.ini
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Location of <em>default.ini</em>:</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>ls /opt/alt/phpXY/etc/php.d/default.ini
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Listing enabled modules on a specific version:</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>[root@localhost ~]# /opt/alt/php73/usr/bin/php -m
[PHP Modules]
bz2
calendar
Core
ctype
curl
date
exif
filter
ftp
gettext
gmp
hash
iconv
libxml
openssl
pcntl
pcre
readline
Reflection
session
shmop
SimpleXML
SPL
sqlite3
standard
tokenizer
xml
zlib

[Zend Modules]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Enabling a module through the CLI:</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>[root@localhost ~]# /opt/alt/php73/usr/bin/php -d &quot;extension=igbinary.so&quot; -m
[PHP Modules]
bz2
calendar
Core
ctype
curl
date
exif
filter
ftp
gettext
gmp
hash
iconv
igbinary
libxml
openssl
pcntl
pcre
readline
Reflection
session
shmop
SimpleXML
SPL
sqlite3
standard
tokenizer
xml
zlib

[Zend Modules]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>As you can see, each version is entirely self-contained, and changing configurations in one will not impact the others, a desired feature in hosting environments.</p><h2 id="extended-lifecycle-support-for-python" tabindex="-1"><a class="header-anchor" href="#extended-lifecycle-support-for-python" aria-hidden="true">#</a> Extended Lifecycle Support for Python</h2><p>Extended Lifecycle Support (ELS) for Python from TuxCare provides security fixes for Python 2.7 version for AlmaLinux 9. This allows to continue running Linux server vulnerability-free.</p><h3 id="installation-instructions-of-yum-repositories-1" tabindex="-1"><a class="header-anchor" href="#installation-instructions-of-yum-repositories-1" aria-hidden="true">#</a> Installation instructions of yum repositories</h3><ol><li>Download an installer script:</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>wget https://repo.cloudlinux.com/python-els/install-python-els-repo.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>Run the installer script with keys. The installation script registers the server in the CLN with the key, adds a PGP key and adds repository to the server.</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>sh install-python-els-repo.sh --license-key XXX-XXXXXXXXXXXX
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>Verify that the installation was successful.</li></ol><p>To ensure the installation has been completed successfully, run the following command. It should return the info about an available package. If information about the package will be available, it would mean that installation was successful. After that, updates will be available for installation from the repository using the usual yum upgrade command.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum info python2

Available Packages
Name         : python2
Version      : 2.7.18
Release      : 10.el9.tuxcare.els1
Architecture : x86_64
Size         : 43 k
Source       : python2-2.7.18-10.el9.tuxcare.els1.src.rpm
Repository   : python-els
Summary      : An interpreted, interactive, object-oriented programming language
URL          : https://www.python.org/
License      : Python
Description  : Python 2 is an old version of the language that is incompatible
             : with the 3.x line of releases.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>To install python, it&#39;s necessary to enable the CodeReady Builder(CRB) repository, which contains the <code>gdbm</code> package.</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum install python2 --enablerepo crb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Once installed, you can use python2 in the usual way.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>$ python2
Python 2.7.18 (default, Jun 30 2022, 00:00:00)
[GCC 11.2.1 20220127 (Red Hat 11.2.1-9)] on linux2
Type &quot;help&quot;, &quot;copyright&quot;, &quot;credits&quot; or &quot;license&quot; for more information.
&gt;&gt;&gt; print &quot;Hello, World!&quot;
Hello, World!
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="installation-instructions-of-a-local-mirror-1" tabindex="-1"><a class="header-anchor" href="#installation-instructions-of-a-local-mirror-1" aria-hidden="true">#</a> Installation instructions of a local mirror</h3><p>We provide the ability to create local mirrors of Python for ELS updates. To obtain the access to the local mirroring, provide your External IP address to your Account Manager or send it to <a href="mailto:sales@tuxcare.com">sales@tuxcare.com</a>.</p><p>To create a local mirror of the repository with security updates via <code>rsync</code>, use the following:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>rsync://repo.cloudlinux.com/PYTHON_ELS/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Example of creating a local mirror for all supported OS versions:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>rsync  -avSHP --delete rsync://repo.cloudlinux.com/PYTHON_ELS/ .
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="oval-data-1" tabindex="-1"><a class="header-anchor" href="#oval-data-1" aria-hidden="true">#</a> OVAL data</h3><h4 id="introduction-1" tabindex="-1"><a class="header-anchor" href="#introduction-1" aria-hidden="true">#</a> Introduction</h4><p>This section contains information about available ELS for Python OVAL streams that can be used for partner application integration. Currently, we provide OVAL data for AlmaLinux 9.</p><h4 id="tuxcare-python-els-oval-stream" tabindex="-1"><a class="header-anchor" href="#tuxcare-python-els-oval-stream" aria-hidden="true">#</a> TuxCare Python ELS OVAL Stream</h4><p>AlmaLinux 9: <a href="https://repo.cloudlinux.com/python-els/almalinux9-els-python-oval.xml" target="_blank" rel="noopener noreferrer">https://repo.cloudlinux.com/python-els/almalinux9-els-python-oval.xml</a>.</p><h4 id="how-to-use-oval-1" tabindex="-1"><a class="header-anchor" href="#how-to-use-oval-1" aria-hidden="true">#</a> How to use OVAL</h4><ol><li>Install OpenSCAP:</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum install openscap openscap-utils scap-security-guide -y
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>Download OVAL stream:</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>wget https://repo.cloudlinux.com/python-els/almalinux9-els-python-oval.xml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>Run scanning:</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>oscap oval eval --results result.xml --report report.xml almalinux9-els-python-oval.xml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,109),t=[a];function d(r,o){return i(),n("div",null,t)}const u=e(l,[["render",d],["__file","index.html.vue"]]);export{u as default};
