import {
    HttpClientTestingModule,
    HttpTestingController,
} from '@angular/common/http/testing';

import {
    foodAddedItem,
    foodAddItem,
    foodDeleteItem,
    foodLoadData,
    foodQueryItem,
    foodUpdateItem,
    foodUpdatedItem,
    foodDeleteResult
} from "./testing/food-mock";

import { FoodItem } from "./food.model";
import { FoodService } from "./food.service";
import { TestBed } from '@angular/core/testing';

describe('Food Service - HttpTestingController', () => {
    let fs: FoodService;
    let controller: HttpTestingController;
    let url = "http://localhost:3000/food"

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [FoodService],
        });

        fs = TestBed.inject(FoodService);
        controller = TestBed.inject(HttpTestingController);
    });
    afterEach(() => {
        controller.verify();
    });

    it('should return the initial load data', () => {
        fs.getFood().subscribe((data) => {
            expect(data).toBeTruthy();
            expect(data.length).toBe(4);
            const firstFood = data.find((f) => f.id == 2);
            expect(firstFood).toEqual(foodQueryItem);
        });

        // test if a specific url has been called using GET
        const req = controller.expectOne(url);
        expect(req.request.method).toEqual('GET');
        // flushing down mock data
        req.flush(foodLoadData);
    });

    it('should add a food item', () => {
        fs.addFood(foodAddItem as FoodItem).subscribe((f) => {
            expect(f).toBeTruthy();
        });

        // test if a specific url has been called using GET
        const req = controller.expectOne(url);
        expect(req.request.method).toEqual('POST');
        // flushing down mock data
        req.flush(foodAddedItem);
    });

    it('should delete a food item', () => {
        fs.deleteFood(foodDeleteItem.id).subscribe((f) => {
            expect(f).toEqual({});
        });

        const req = controller.expectOne(url + "/" + foodDeleteItem.id);
        expect(req.request.method).toEqual('DELETE');
        req.flush({});
        controller.verify();
    });

    it('should update a food item', () => {
        fs.updateFood(foodUpdateItem as FoodItem).subscribe((f) => {
            expect(f).toBeTruthy();
        });

        const req = controller.expectOne(url + "/" + foodUpdateItem.id);
        expect(req.request.method).toEqual('PUT');
        req.flush(foodUpdatedItem);
    });
});
