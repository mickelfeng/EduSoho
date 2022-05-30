<?php

namespace MarketingMallBundle\Event;

use Codeages\Biz\Framework\Event\EventSubscriber;
use Codeages\Biz\Framework\Service\Exception\ServiceException;
use MarketingMallBundle\Client\MarketingMallClient;
use MarketingMallBundle\Common\GoodsContentBuilder\AbstractBuilder;

abstract class BaseEventSubscriber extends EventSubscriber
{
    const NORMAL_TYPE = ['course', 'classroom', 'questionBank'];

    const ALONE_MAINTAIN_TYPE = ['teacherInfo', 'classroomCourse'];

    protected function updateGoodsContent($type, AbstractBuilder $builder, $id)
    {
        $relation = $this->getProductMallGoodsRelationService()->getProductMallGoodsRelationByProductTypeAndProductId($type, $id);
        if (empty($relation)) {
            return;
        }
        $builder->setBiz($this->getBiz());
        $client = new MarketingMallClient($this->getBiz());
        $client->updateGoodsContent([
            'goodsCode' => $relation['goodsCode'],
            'targetType' => $type,
            'targetId' => $id,
            'goodsContent' => json_encode($builder->build($id)),
        ]);
    }

    public function updateTeacherOrClassCourse($type, AbstractBuilder $builder, $id){
        $builder->setBiz($this->getBiz());
        $client = new MarketingMallClient($this->getBiz());
        $client->updateTeacherOrClassCourse([
            'targetType' => $type,
            'targetId' => $id,
            'goodsContent' => json_encode($builder->build($id)),
        ]);
    }

    protected function deleteMallGoods($code)
    {
        try {
            $client = new MarketingMallClient($this->getBiz());
            $result = $client->deleteGoodsBycode($code);
            if (!$result['ok']) {
                throw new ServiceException('删除营销商城商品失败，请重试！');
            }
        } catch (\Exception $exception) {
            throw $exception;
        }
    }

    protected function getProductMallGoodsRelationService()
    {
        return $this->getBiz()->service('MarketingMallBundle:ProductMallGoodsRelation:ProductMallGoodsRelationService');
    }
}
