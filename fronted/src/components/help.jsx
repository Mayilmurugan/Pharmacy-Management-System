import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import users from "./users";
import axios from 'axios';
function Help(){
    return (
    <div className="sm:ml-64">
        <div className="bg-purple-100 rounded-2xl  gap-x-14 mt-10 p-4 items-center z-0">
        <h2 class="text-lg font-bold mb-2">Dashboard Overview</h2>
  <p class="mb-4"><strong>What's New on the Dashboard?</strong></p>
  <ul class="list-disc list-inside mb-4">
    <li><strong>Total Medicine Count:</strong> View the total number of medicines available.</li>
    <li><strong>Low Stock Count:</strong> See the count of medicines that are low on stock.</li>
    <li><strong>Suppliers:</strong> Access information about suppliers to frequently monitor the status of medicines and vendors.</li>
  </ul>

  <h2 class="text-lg font-bold mb-2">Removing Drugs from the Page</h2>
  <p class="mb-4"><strong>How to Remove Drugs that are Out of Stock or Stop Selling?</strong></p>
  <ol class="list-decimal list-inside mb-4">
    <li>Go to the drug details section.</li>
    <li>You will see a list of drugs.</li>
    <li>Alongside each drug, there are "Update" and "Remove" buttons.</li>
    <li>Click the "Remove" button to delete the drug from the database.</li>
  </ol>

  <h2 class="text-lg font-bold mb-2">Billing a Customer</h2>
  <p class="mb-4"><strong>Steps to Bill a Customer:</strong></p>
  <ol class="list-decimal list-inside mb-4">
    <li>Navigate to the billing section.</li>
    <li>Enter the customer's name and click "Generate Bill".</li>
    <li>Enter the medicine details and the quantity needed.</li>
    <li>Proceed to complete the billing process.</li>
    <li>Finally, you will have the bill generated.</li>
  </ol>
        </div>
    </div>
    );
}
export default Help;