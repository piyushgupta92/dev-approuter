using org from '../db/schema';

// @impl: 'srv/main.cjs'
service bookshop {
    entity Books   as projection on org.pg.Books;
    entity Authors as projection on org.pg.Authors;
    entity Orders as projection on org.pg.Orders;
}
