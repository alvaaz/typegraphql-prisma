import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { EquipmentOrderByRelevanceFieldEnum } from "../../enums/EquipmentOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("EquipmentOrderByRelevanceInput", {
  isAbstract: true
})
export class EquipmentOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [EquipmentOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: "id"[];

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
