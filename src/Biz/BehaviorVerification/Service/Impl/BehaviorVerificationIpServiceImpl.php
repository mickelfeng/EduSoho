<?php

namespace Biz\BehaviorVerification\Service\Impl;

use Biz\BaseService;
use Biz\BehaviorVerification\Service\BehaviorVerificationIpService;
use Biz\BehaviorVerification\Dao\BehaviorVerificationIpDao;

class BehaviorVerificationIpServiceImpl extends BaseService implements BehaviorVerificationIpService
{

    public function isInBlackIpList($ip)
    {
        $smsBlackIp = $this->getBehaviorVerificationIpDao()->getByIp($ip);
        if (empty($smsBlackIp)){
            return false;
        }
        if($smsBlackIp['expire_time'] < time()){
            return false;
        }
        return true;
    }

    public function addBlackIpList($ip)
    {
        $smsBlackIp = $this->getBehaviorVerificationIpDao()->getByIp($ip);
        if (empty($smsBlackIp)){
            $this->getBehaviorVerificationIpDao()->create(['ip'=>$ip, 'expire_time'=>time() + 3 * 30 * 24 * 3600]);
        }
    }

    /**
     * @return BehaviorVerificationIpDao
     */
    protected function getBehaviorVerificationIpDao()
    {
        return $this->createDao("BehaviorVerification:BehaviorVerificationIpDao");
    }
}
