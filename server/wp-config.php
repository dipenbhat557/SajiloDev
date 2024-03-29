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
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'sajilo-server' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

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
define( 'AUTH_KEY',         'w-;)a:= 8St^tFOU8$~q0B{yNjKtd*n9V&h5zD::i0&ix@uG)c=TR*]kF=Z4pnxm' );
define( 'SECURE_AUTH_KEY',  '75g`AObSq2{ARUET^;[8mexg*dZ@IC]-<ftuHWoIkzUNB%}X)BRh}qQyhW!Ahp*s' );
define( 'LOGGED_IN_KEY',    'Sbqk8>6z]>u5Nwsi8`ni0M:[p@i)L9zy_]CeIbItEMvO`+JwJ6yf?%6CSS?WTYg|' );
define( 'NONCE_KEY',        ')I>v*!S;)NSX<Yhir68+$~Ykf3k_`w:~Ob?nIJE+>.f9E$2X$hm27 dtw++b4FCD' );
define( 'AUTH_SALT',        'eI>5V!gU8cr!8@RWL_xCZ4xpn3(W^[^[cxnw|V>8u:zAqbO)Fh[9lc#68FOL[>[0' );
define( 'SECURE_AUTH_SALT', 'xlJ1+Zv;EO[?HJg~)t} 5V2mw_;BcKM|&o1ona$)B}V(ddS{7)wg%0dvGD~kF>X|' );
define( 'LOGGED_IN_SALT',   '4EVyDHiX./IWYTR0m!6{,/PyOe<oetzOj-H{Z^>ikSW0W_%^1VaItc;GUv^ldHv&' );
define( 'NONCE_SALT',       'ce22IbN!0O{)a6ou~<~)rWAk8(i_>`kK~d>#~yIaeeYSpo_~yHW}ty;+MfFmkO9m' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

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
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
