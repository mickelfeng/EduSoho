<?php

return array(
    'GET' => array(
        '/^\/api\/users$/',
        '/^\/api\/users\/pages$/',
        '/^\/api\/users\/\d+$/',
        '/^\/api\/mobileschools\/.+$/',
        '/^\/api\/classrooms\/\w+\/members$/',
        '/^\/api\/category\/show$/'
    ),
    'POST' => array(
        '/^\/api\/users$/',
        '/^\/api\/users\/login$/',
        '/^\/api\/users\/bind_login$/'
    )
);