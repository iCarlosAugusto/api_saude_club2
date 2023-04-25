import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ServicesService } from './services.service';
import { Service } from './entities/service.entity';
import { CreateServiceInput } from './dto/create-service.input';
import { UpdateServiceInput } from './dto/update-service.input';
import { FindAllServicesInput } from './dto/find-all-services.input';

@Resolver(() => Service)
export class ServicesResolver {
  constructor(private readonly servicesService: ServicesService) {}

  @Mutation(() => Service)
  createService(@Args('createServiceInput') createServiceInput: CreateServiceInput) {
    return this.servicesService.create(createServiceInput);
  }

  @Query(() => [Service], {nullable: true})
  findAllServices(@Args('findAllPartnersInput') findAllServicesInput: FindAllServicesInput) {
    return this.servicesService.findAll(findAllServicesInput);
  }

  @Query(() => Service, { name: 'service' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.servicesService.findOne(id);
  }

  @Mutation(() => Service)
  updateService(@Args('updateServiceInput') updateServiceInput: UpdateServiceInput) {
    return this.servicesService.update(updateServiceInput.id, updateServiceInput);
  }

  @Mutation(() => Service)
  removeService(@Args('id', { type: () => Int }) id: number) {
    return this.servicesService.remove(id);
  }
}
