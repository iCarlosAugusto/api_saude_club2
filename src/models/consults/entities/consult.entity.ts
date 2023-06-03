import { ObjectType, Field } from '@nestjs/graphql';
import { PartnerEntity } from 'src/models/partners/entities/partner.entity';
import { ServiceEntity } from 'src/models/services/entities/service.entity';
import { ClientEntity } from 'src/models/users/entities/client.entity';

@ObjectType()
export class ConsultEntity {
  @Field(() => String)
  partnerId: string;

  @Field(() => PartnerEntity, { nullable: true })
  partner: PartnerEntity;

  @Field(() => ServiceEntity, { nullable: true })
  service: PartnerEntity;

  @Field(() => ClientEntity, { nullable: true })
  client: ClientEntity;

  @Field(() => String)
  clientId: string;

  @Field(() => Boolean)
  isFinished: boolean;
}
