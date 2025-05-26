<?php



/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'u329489490_PAfNE' );
define( 'DB_USER', 'u329489490_CVALN' );
define( 'DB_PASSWORD', 'Akash$1102' );
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );
define( 'WPCF7_AUTOP', false );
/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          '`v~-i/|i`7yG?6m)H(7Hs=gpVJW:`p.JYbevU)IDgQ0o+hm/Zv*$!2HL,DY*2z7N' );
define( 'SECURE_AUTH_KEY',   'sCNK,t|dpeObTl2fIt,T]|]YymQD#X2NW5mgvO;S9)2j/)PV}=.jpY4c+TkDE)- ' );
define( 'LOGGED_IN_KEY',     'mdMi&U)N1nqh7eM]Rf &=F;_Xgs-B6ia{`m5j!O+,!HA>=S4AVeSnl.Z-eGgoO %' );
define( 'NONCE_KEY',         'w=Ae[TrdbJE.xi@UI^5II><>.V@StMUNIR]F/?@v/`BCOm4tzS@+o)22U~6>1dh#' );
define( 'AUTH_SALT',         'Wn^x1)1~x78ggPffQVSl1pF%W<}?v`u&rG(E=W:R1Ii./2Q9em(V^-CDH?5Z,z77' );
define( 'SECURE_AUTH_SALT',  'B8N5fo9H:12[Cs09F*gsF+M,w:8CqXC/%i)LFQG0+Mts*My2xe>u*/msJs[F<kBg' );
define( 'LOGGED_IN_SALT',    'M5@cW6z$0{I {C&.!~%{Z^?;s;?H )d!waF-R0p0QUgW!:IpGy}#SRlR& ,,X<Ir' );
define( 'NONCE_SALT',        'IpvP(b-6Zz*4%N$Hy>}7JiK9O@~N?.O0=wOl}!w &(,O9tB[z9$qTR*o$MVI[kj,' );
define( 'WP_CACHE_KEY_SALT', '`]If.*nbY?/^G^z`5:>FT=oTI`~d$f9absV~*`R2p9o-~EM@#/C(Wm^_i7mv?ztk' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}


define( 'FS_METHOD', 'direct' );
define( 'COOKIEHASH', 'ce594068bd229b2446f6165e4a721358' );
define( 'WP_AUTO_UPDATE_CORE', 'minor' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
