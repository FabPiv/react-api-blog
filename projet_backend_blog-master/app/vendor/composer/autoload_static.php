<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit44583b8a1ac0186df589c48fee1d0a28
{
    public static $prefixLengthsPsr4 = array (
        'A' => 
        array (
            'App\\' => 4,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'App\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit44583b8a1ac0186df589c48fee1d0a28::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit44583b8a1ac0186df589c48fee1d0a28::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit44583b8a1ac0186df589c48fee1d0a28::$classMap;

        }, null, ClassLoader::class);
    }
}
